import Header from './components/general/layouts/header/header';
import Sidebar from './components/general/layouts/sidebar/sidebar';

function App() {
  return (
    <div className="grid min-h-screen w-full grid-cols-4 grid-rows-[auto_1fr_auto] gap-5">
      <Header />
      <main className="col-span-3 row-span-1">
        <h1>main</h1>
        <p>Main content</p>
      </main>

      <aside className="col-span-1 row-span-1 border-l border-purple-700">
        <h2>Aside</h2>
        <p>Related content</p>
        <div>سلام فقط برای تست فونت</div>
        <Sidebar />
      </aside>

      <footer className="col-span-4 rounded-md bg-purple-700 p-1 text-center text-gray-100">
        footer
      </footer>
    </div>
  );
}

export default App;
