import React from 'react';
import { RecipeResultData } from '../../types/RecipeResponse';
import { Card } from './styles';

export interface RecipeCardProps extends RecipeResultData{}

const RecipeCard: React.FC<RecipeCardProps> = ({
    title, image, sourceUrl
})=>{

    return(
        <a href={sourceUrl} target="_blank">
            <Card>
                <img src={image} alt={title} className="card-image" />
                <div className="overlay">
                    <div className="spacer"></div>
                    <div>
                        <p>{title}</p>
                    </div>
                </div>
            </Card>
        </a>
    )
}

export default RecipeCard;