// LoginForm.tsx
import { cn } from '../ui/utils';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useAuth } from '../../firebase/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { signIn } = useAuth();

    const navigateToAccount = useNavigate();

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        // Basic validation
        if (!username.trim()) {
            alert('Username is required');
            return;
        }
        if (!password.trim()) {
            alert('Password is required');
            return;
        }

        setIsLoading(true);
        try {
            await signIn(username, password);
            setTimeout(() => {
                navigateToAccount('/account');
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                alert('Failed to sign in:' + error);
            }, 1000);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mx-auto flex flex-col gap-y-4 lg:w-[400px]">
                <div className="text-secondary text-sm">
                    Enter your details below to sign into your account
                </div>
                <div
                    className={cn('grid gap-6 text-black', className)}
                    {...props}
                >
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="Username">
                                    Username
                                </Label>
                                <Input
                                    id="Username"
                                    placeholder="username"
                                    type="username"
                                    autoCapitalize="none"
                                    disabled={isLoading}
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="text-white"
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="text-white"
                                />
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading ? (
                                    <div className="mr-2">Loading...</div>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
