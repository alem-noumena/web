import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 ${className}`}>
      {icon && (
        <div className="mb-4 text-noumena-accent-1">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
