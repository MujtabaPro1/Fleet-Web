import { useEffect, useState } from 'react';
import { callMiddlewareApi } from '../utils/api';
import api from '@/service/api';

interface DynamicContentProps {
  contentKey: string;
  className?: string;
  fallbackContent?: React.ReactNode;
  isLoading?: React.ReactNode;
}

const DynamicContent: React.FC<DynamicContentProps> = ({
  contentKey,
  className = '',
  fallbackContent,
  isLoading = <div className="animate-pulse bg-gray-200 h-20 w-full rounded"></div>,
}) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/1.0/page-content/${contentKey}`);

        if (response.data?.content) {
          setContent(response.data.content);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (contentKey) {
      fetchContent();
    }
  }, [contentKey]);

  if (loading) {
    return <>{isLoading}</>;
  }

  if (error || !content) {
    return <>{fallbackContent}</>;
  }

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default DynamicContent;
