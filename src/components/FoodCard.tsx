import React from 'react';

type FoodCardProps = {
    title: string;
    discount: string;
    price: string;
    image: string;
};

const FoodCard = ({ title, discount, image, price }: FoodCardProps) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-full">
            {/* Imagem como fundo */}
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />

            {/* Overlay para escurecer a imagem e facilitar a leitura do texto */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Conteúdo sobreposto à imagem */}
            <div className="relative p-4 text-white pt-8">
                {/* Título no canto superior esquerdo, ajustado para baixo */}
                <div className="absolute top-8 left-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>

                {/* Ícone de desconto customizado com 8 pontas */}
                <div className="absolute top-4 right-4">
                    <div className="relative flex items-center justify-center">
                        <div className="bg-red-500 text-white text-sm px-3 py-2 flex items-center justify-center"
                            style={{
                                clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
                                transform: 'scale(1.4)',
                                padding: '10px'
                            }}>
                            <span className="font-bold text-lg">{discount}</span>
                        </div>
                    </div>
                </div>

                {/* Preço na parte inferior */}
                <div className="absolute bottom-4 left-4 text-lg font-bold">
                    {price}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
