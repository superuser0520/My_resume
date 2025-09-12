import React, { useRef, useEffect } from 'react';
import { useEdit } from '../contexts/EditContext';

interface EditableProps {
  path: string;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const EditableText: React.FC<EditableProps> = ({ path, as: Component = 'span', className, children }) => {
  const { isEditing, updateContent } = useEdit();
  const elementRef = useRef<HTMLElement>(null);

  const handleBlur = () => {
    if (elementRef.current) {
      updateContent(path, elementRef.current.innerText);
    }
  };

  if (isEditing) {
    return (
      <Component
        ref={elementRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={handleBlur}
        className={`${className} focus:outline-none focus:ring-2 focus:ring-accent rounded-sm p-1 -m-1 border-b-2 border-dotted border-l_accent/50 dark:border-accent/50`}
      >
        {children}
      </Component>
    );
  }

  return <Component className={className}>{children}</Component>;
};

interface EditableImageProps {
    path: string;
    alt: string;
    className?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({ path, alt, className }) => {
    const { isEditing, updateContent } = useEdit();
    const { content } = useEdit();

    const getNestedValue = (obj: any, path: string) => path.split('.').reduce((acc, part) => acc && acc[part], obj);
    const src = getNestedValue(content, path);

    const handleClick = () => {
        if(isEditing) {
            const newSrc = prompt("Enter new image URL:", src);
            if (newSrc) {
                updateContent(path, newSrc);
            }
        }
    }

    return (
        <img 
            src={src} 
            alt={alt} 
            className={`${className} ${isEditing ? 'cursor-pointer ring-2 ring-accent ring-offset-4 ring-offset-secondary rounded-md' : ''}`}
            onClick={handleClick} 
        />
    )
}
