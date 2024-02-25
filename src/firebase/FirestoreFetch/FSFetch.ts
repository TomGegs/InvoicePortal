import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { InvoiceData, dataSchema } from '../../data/dataSchema';

export async function FSFetch() {
    const dataList: InvoiceData[] = [];
    const user = auth.currentUser;
    if (!user) {
        console.error('User not logged in');
        return dataList;
    }

    const userId = user.uid;
    try {
        const querySnapshot = await getDocs(
            collection(db, `Invoices/${userId}/userInvoices`)
        );
        querySnapshot.docs.forEach((doc) => {
            const data = doc.data();
            // Assuming 'File' field in your document contains the direct URL to the file
            const invoice = dataSchema.parse({
                id: doc.id,
                ...data,
                File: data.File || 'No URL Found', // Use the URL directly from the 'File' field
            });
            dataList.push(invoice);
        });
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    return dataList;
}
