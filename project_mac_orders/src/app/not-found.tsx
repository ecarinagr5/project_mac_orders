import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="">
      <h1 className="">404 - Page Not Found</h1>
      <p className="">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="">Go back home</a>
      </Link>
    </div>
  );
};

export default NotFound;
