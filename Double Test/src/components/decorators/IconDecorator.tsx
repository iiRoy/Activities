import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  className?: string;
}

const withIconDecorator = (Icon: React.FC<IconProps>) => {
  const DecoratedIcon: React.FC<IconProps> = (props) => {
    const [strokeWidth, setStrokeWidth] = useState<number>(1.1);
    const iconRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
      const updateStrokeWidth = () => {
        if (iconRef.current) {
          const computedStyle = getComputedStyle(iconRef.current);
          const strokeWidthValue = parseFloat(
            computedStyle.getPropertyValue('--icon-stroke-width'),
          );
          if (!isNaN(strokeWidthValue)) {
            setStrokeWidth(strokeWidthValue);
          }
        }
      };

      updateStrokeWidth();
    }, [pathname]);

    const finalStrokeWidth = props.strokeWidth ?? strokeWidth;

    const decoratedProps = {
      ...props,
      strokeColor: props.strokeColor || 'currentColor',
      fillColor: props.fillColor || 'currentColor',
      strokeWidth: finalStrokeWidth,
    };

    return (
      <div ref={iconRef} className={props.className}>
        <Icon {...decoratedProps} />
      </div>
    );
  };

  DecoratedIcon.displayName = `withIconDecorator(${Icon.displayName || Icon.name || 'Component'})`;

  return DecoratedIcon;
};

export default withIconDecorator;
