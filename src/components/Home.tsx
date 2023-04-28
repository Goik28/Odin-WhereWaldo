import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="h-screen p-[110px]"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #ffffff 12.50%, #7dd3fc 12.50%, #7dd3fc 25%, #fff 25%, #fff 37.50%, #dc2626 37.50%, #dc2626 50%, #ffffff 50%, #ffffff 62.50%, #7dd3fc 62.50%, #7dd3fc 75%, #fff 75%, #fff 87.50%, #dc2626 87.50%, #dc2626 100%)",
        backgroundSize: "600.00px 600.00px",
      }}
    >
      <div className="mx-auto flex w-[600px] flex-col items-center justify-center rounded-md border-2 border-blue-300 bg-white p-2">
        <div className="mb-2 border-b-2 border-blue-300 pb-2">
          <h1 className="text-6xl font-bold">Where's Waldo?</h1>
          <p className="text-center text-sm">
            An "Odin Project" project by <a className="underline" href="https://github.com/Goik28">Goik28</a>
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-center text-3xl font-semibold">
            Find the following characters to win:
          </h2>
          <div className="mb-2 flex border-b-2 border-blue-300 pb-2 justify-between">
            <div className="">
              <img src="/Waldo.jpg" alt="Waldo picture" className="h-[300px]" />
              <p className="text-center text-xl font-semibold">Waldo</p>
            </div>
            <div className="border-x-2 border-dashed border-blue-300 px-10">
              <img src="/Odlaw.jpg" alt="Odlaw picture" className="h-[300px]" />
              <p className="text-center text-xl font-semibold">Odlaw</p>
            </div>
            <div className="">
              <img
                src="/Wizard.jpg"
                alt="Wizard picture"
                className="h-[300px]"
              />
              <p className="text-center text-xl font-semibold">Wizard</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="w-[500px] text-xl font-semibold">
            The fastest users can login with their google account to register
            their name on the "Hall of Fame".
          </h3>
          <Link
            className="m-2 w-32 rounded-md border-2 border-blue-300 bg-red-600 p-2 text-center text-xl font-bold text-white transition-all hover:bg-red-800"
            to={"/start"}
            title="Start game"
          >
            START
          </Link>
        </div>
      </div>
    </div>
  );
}
