import React from 'react';
import Button from '@/components/buttons_inputs/Button';
import Checkbox from '@/components/buttons_inputs/Checkbox';

type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

type IconComponent = React.FC<{
  width?: number | string;
  height?: number | string;
  color?: string;
}>;

type MessageCardProps = {
  color: 'purple' | 'green' | 'red' | 'yellow';
  Icon: React.FC<{ width?: number | string; height?: number | string; color?: string }>;
  title: string;
  description: string;
  checkboxLabel?: string;
  checkboxChecked: boolean;
  onCheckboxChange: (checked: boolean) => void;

  // Mostrar botones
  showAccept?: boolean;
  showDoubt?: boolean;
  showDecline?: boolean;

  // Configuración para cada botón
  acceptVariant?: Variant;
  acceptLabel?: string;
  acceptIcon?: IconComponent;
  onAccept?: () => void;

  doubtVariant?: Variant;
  doubtLabel?: string;
  doubtIcon?: IconComponent;
  onDoubt?: () => void;

  declineVariant?: Variant;
  declineLabel?: string;
  declineIcon?: IconComponent;
  onDecline?: () => void;
};

export const MessageCard: React.FC<MessageCardProps> = ({
  color,
  Icon,
  title,
  description,
  checkboxLabel,
  checkboxChecked,
  onCheckboxChange,

  showAccept = false,
  showDoubt = false,
  showDecline = false,

  acceptVariant = 'success',
  acceptLabel = 'Accept',
  acceptIcon,
  onAccept,

  doubtVariant = 'warning',
  doubtLabel = 'Doubt',
  doubtIcon,
  onDoubt,

  declineVariant = 'error',
  declineLabel = 'Decline',
  declineIcon,
  onDecline,
}) => {
  return (
    <div className={`message-card border-${color}`}>
      <div className='icon-title'>
        <div className={`message-icon icon-${color}`}>{<Icon width={25} height={25} />}</div>
        <h2 className={`title title-${color}`}>{title}</h2>
      </div>
      <p className='description'>{description}</p>

      {checkboxLabel && (
        <div className='checkbox-row'>
          <Checkbox
            color={color}
            label={checkboxLabel}
            checked={checkboxChecked}
            onChange={onCheckboxChange}
          />
        </div>
      )}

      <div className='button-row'>
        {showAccept && (
          <Button
            variant={acceptVariant}
            showLeftIcon
            IconLeft={acceptIcon}
            label={acceptLabel}
            onClick={onAccept}
          />
        )}
        {showDoubt && (
          <Button
            variant={doubtVariant}
            showLeftIcon
            IconLeft={doubtIcon}
            label={doubtLabel}
            onClick={onDoubt}
          />
        )}
        {showDecline && (
          <Button
            variant={declineVariant}
            showLeftIcon
            IconLeft={declineIcon}
            label={declineLabel}
            onClick={onDecline}
          />
        )}
      </div>
    </div>
  );
};

export default MessageCard;
