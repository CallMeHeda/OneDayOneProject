export default function Canvas() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-center">
        <div className="flex mt-7 canvas">
          <canvas
            id="canvas"
            width="1500"
            height="800"
            className="border border-solid border-gray-500 bg-slate-50"
          ></canvas>
        </div>

        <div className="flex flex-col justify-between">
          <div className="btnClear">
            <button
              type="button"
              className="bg-red-600 p-2 rounded-md uppercase text-gray-100 font-semibold ml-4 mb-6 font-cursive"
            >
              Clear canvas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
