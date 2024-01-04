export default function Buttons(props) {
  return (
    <button
      className="w-full rounded-lg bg-[rgba(36,87,196,255)] p-[20px] mt-4"
      value={props.value}
    >
      {props.value}
    </button>
  );
}
