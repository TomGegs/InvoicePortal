//FSFetch.ts
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { InvoiceData, dataSchema } from '../../data/dataSchema';

export async function FSFetch() {
    const dataList: InvoiceData[] = [];

    // Ensure the user is logged in and has an ID
    const user = auth.currentUser;
    if (!user) {
        console.error('User not logged in');
        return dataList; // Return an empty array or handle as needed
    }
    const userId = user.uid; // Get the logged-in user's ID

    try {
        const querySnapshot = await getDocs(
            collection(db, `Invoices/${userId}/userInvoices`)
        );
        querySnapshot.forEach((doc) => {
            // Use Zod to validate and parse data
            const Invoice = dataSchema.parse({
                id: doc.id,
                ...doc.data(),
            });
            dataList.push(Invoice);
        });
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    return dataList;
}
