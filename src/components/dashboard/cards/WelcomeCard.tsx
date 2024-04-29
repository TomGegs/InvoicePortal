import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { auth } from '../../../firebase/firebaseConfig';

const WelcomeCard = () => {
    // Capitalize the first letter of the username extracted from the email
    const capitalisedUsername =
        auth.currentUser?.email
            ?.split('@')[0]
            ?.replace(/^\w/, (c) => c.toUpperCase()) || '';

    // Determine the local time of day and appropriate message
    const hours = new Date().getHours();
    const timeOfDay =
        hours < 12
            ? 'Have a magical morning'
            : hours < 17
              ? "Hope it's an amazing afternoon"
              : 'Enjoy an excellent evening';

    return (
        <Card className="w-2/3">
            <CardHeader className="h-full content-center justify-center object-center text-left">
                <CardTitle>Invoice Dashboard</CardTitle>
                <CardDescription className="mt-10 max-w-lg text-balance leading-relaxed ">
                    {timeOfDay}{' '}
                    {auth.currentUser?.email === 'demo@example.com'
                        ? '{client name}'
                        : capitalisedUsername}
                </CardDescription>
            </CardHeader>
        </Card>
    );
};

export default WelcomeCard;
