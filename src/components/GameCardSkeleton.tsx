import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
	return (
		<Card width="300px" borderRadius={10} overflow="hidden">
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText height="30px" />
				<SkeletonText height="20px" />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
