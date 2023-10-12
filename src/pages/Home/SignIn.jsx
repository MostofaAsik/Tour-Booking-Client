import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/image/login.svg';
import GoggleLogin from './GoggleLogin';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = ({ email, password }) => {
        // Email Password Login

        console.log(email, password);
    };



    return (
        <div className="flex max-w-7xl md:h-screen items-center mx-auto">
            <div className=" hidden md:block md:w-1/2">
                <img src={loginImage} className="md:h-3/4 md:w-3/4" alt="" />
            </div>
            <div className="w-full md:w-1/2 grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                    <h1 className="mb-10 font-medium text-2xl">Login</h1>
                    <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-md"
                                {...register('password')}
                            />
                        </div>
                        <div className="relative !mt-8">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                        </div>
                        <div>
                            <p>
                                Don&apos;t have an account?{' '}
                                <span
                                    className="text-primary hover:underline cursor-pointer"
                                    onClick={() => navigate('/signup')}
                                >
                                    Sign up
                                </span>
                            </p>
                        </div>
                        {/* <button
                            type="button"
                            className="btn btn-primary w-full"
                            onClick={handleGoogleLogin}
                        >
                            Login with Google
                        </button> */}
                        <GoggleLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;