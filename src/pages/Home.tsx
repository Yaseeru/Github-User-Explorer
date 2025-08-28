import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        GitHub User Explorer
      </h1>
      <SearchForm />
    </div>
  );
};

export default Home;