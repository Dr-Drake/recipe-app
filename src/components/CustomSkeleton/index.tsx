import React from 'react';
import { SkeletonDiv } from './styles';

export interface CustomSkeletonProps{
    loading?: boolean;
    children?: React.ReactNode;
}
const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ loading, children })=>{

    if (loading) {
        return(
            <SkeletonDiv>
                <div className="skeleton-content">
                    { children }
                </div>
            </SkeletonDiv>
        )
    }

    return(
        <React.Fragment>
            { children }
        </React.Fragment>
    );
}

export default CustomSkeleton;