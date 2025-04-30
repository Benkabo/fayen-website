interface DestinationDetailsProps {
  title: string;
  subtitle: string;
  details: string[];
}

export default function DestinationDetails({
  title,
  subtitle,
  details,
}: DestinationDetailsProps) {
  return (
    <div className="p-30 absolute inset-0 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-4">
      <div className="text-black text-left">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm font-semibold mb-4">{subtitle}</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {details.map((detail, index) => (
            <li key={index} style={{ maxWidth: "600px" }}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
