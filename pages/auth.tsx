import AuthForm from '../components/auth/auth-form';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import Loader from '../components/ui/LoaderCircle';


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
        return <>
         <Loader />
         </>
    }
    return (
        <div className='bg-[#f3f4f6] dark:bg-black min-h-[85VH] flex align-center'>
        <AuthForm />
        </div>
    );
    }

export default LoginPage;