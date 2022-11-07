import AuthForm from '../components/auth/auth-form';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

const LoginPage = () => {
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            // if user is logged in, redirect to home page
            getSession().then((session) => {
                if (session) {
                    window.location.href = '/';
                } else {
                    setIsLoading(false);
                }
            });
        }, []);

    if( isLoading ) {
        return <p className="center">Loading...</p>
    }
    return (
        <div className='bg-[#e5e7eb] dark:bg-black min-h-[85VH] flex align-center'>
        <AuthForm />
        </div>
    );
    }

export default LoginPage;