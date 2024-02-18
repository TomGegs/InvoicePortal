import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Button } from '../../ui/button';
import recovereLogo from '../../../assets/recovereLogo.png';
import { auth } from '../../../firebase/firebaseConfig';
import { useAuth } from '../../../firebase/Auth/useAuth';

export function UserNav() {
    const { signOut } = useAuth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={recovereLogo} alt="user avatar" />
                        <AvatarFallback>INV</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {auth.currentUser?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => signOut()}>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
