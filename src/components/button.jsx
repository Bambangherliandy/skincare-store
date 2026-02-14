/* export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={
        "w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
      }
    >
      {children}
    </button>
  );
}
 */
export default function Button({ nameProp }) {
  return (
    <>
      <button className="w-full mt-5 py-2 px-4 border-2 border-black rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        {nameProp}
      </button>
    </>
  );
}
