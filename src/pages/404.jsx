import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-9xl font-bold mb-5">404</h1>
            <p className="text-4xl mb-4">{error.statusText || error.message}</p>
            <p>Halam yang anda cari tidak kami temukan, <a className="text-blue-600 underline" href="/">back to home</a></p> 
        </div>
    );
}

export default ErrorPage;
