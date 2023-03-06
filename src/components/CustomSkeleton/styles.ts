import styled from "styled-components";

export const SkeletonDiv = styled.div`
    animation: skeleton_loading 1s linear infinite alternate;
    @keyframes skeleton_loading {
        0% {
            background-color: hsl(0, 0%, 9%, 1);
        }
        100% {
            background-color: hsl(0, 0%, 11%, 1);
        }
    }

    .skeleton-content{
        opacity: 0;
    }
`;