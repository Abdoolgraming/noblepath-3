import { auth } from '../firebase/auth';
import { db } from '../firebase/init';
import { collections } from '../firebase/collections';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export const initializeDatabase = async () => {
  try {
    // Wait for auth state to be ready
    const user = await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, 
        (user) => {
          unsubscribe();
          resolve(user);
        },
        (error) => {
          unsubscribe();
          reject(error);
        }
      );
    });

    // Only proceed if user is authenticated
    if (!user) {
      console.log('User not authenticated, skipping database initialization');
      return;
    }

    // Check if database needs seeding
    const usersRef = collection(db, collections.users);
    const snapshot = await getDocs(usersRef);
    
    if (snapshot.empty) {
      await import('./seed').then(module => module.seedDatabase());
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    // Don't throw the error, just log it
  }
};