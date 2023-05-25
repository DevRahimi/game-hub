import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText height="30px" />
				<SkeletonText height="20px" />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
