import { useQuery } from '@tanstack/react-query';
import { getOperatorTracking } from '../api/operatorApi';

export const useOperatorTracking = (routeId: number | string) => {
  return useQuery({
    queryKey: ['operatorTracking', routeId],
    queryFn: () => getOperatorTracking(Number(routeId)).then(res => res.data),
    enabled: !!routeId,
    refetchInterval: 1000 * 60, // 1분마다 자동 갱신
    refetchOnWindowFocus: false,
  });
};
