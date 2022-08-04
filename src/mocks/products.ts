import { IProduct } from '../types/Product.types';

const products: IProduct[] = [
  {
    id: '1',
    name: 'Retro 6 Mint',
    category: 'Air Jordan',
    price: 15.3,
    sizes: [
      { value: 37, isAvailable: false },
      { value: 42, isAvailable: true },
      { value: 43, isAvailable: true },
    ],
    description:
      'Wmns Air Jordan 6 “Mint Foam” O AJ6 se destaca por ter sido o primeiro sneaker de campeonato usado por Michael Jordan. Com uma mistura de tons suaves, o modelo apresenta as cores branco e cinza claro que se alternam na parte superior de couro, combinando os outros detalhes. A sola apresenta base branca gelada e tons de menta para contrastar.',
    images: [
      'https://user-images.githubusercontent.com/74895809/178612686-ee3625b0-8c7d-4435-9de3-1842b89d5109.png',
      'https://user-images.githubusercontent.com/74895809/178612594-312e9612-9dfb-4b62-8101-9b841edfa7c3.png',
      'https://user-images.githubusercontent.com/74895809/178612669-0e547880-652e-4880-a344-d6e7ee50aa90.png',
      'https://user-images.githubusercontent.com/74895809/178612623-f4b2009e-735f-43fc-9533-7f663f774555.png',
    ],
  },
  {
    id: '2',
    name: 'Midnight Navy',
    category: 'Air Jordan',
    price: 15.3,
    sizes: [
      { value: 31, isAvailable: true },
      { value: 37, isAvailable: false },
      { value: 42, isAvailable: true },
    ],
    description:
      'Wmns Air Jordan 6 “Mint Foam” O AJ6 se destaca por ter sido o primeiro sneaker de campeonato usado por Michael Jordan. Com uma mistura de tons suaves, o modelo apresenta as cores branco e cinza claro que se alternam na parte superior de couro, combinando os outros detalhes. A sola apresenta base branca gelada e tons de menta para contrastar.',
    images: [
      'https://user-images.githubusercontent.com/74895809/178614016-a5a2574e-a61c-4334-8df4-6c76e3af8389.png',
      'https://user-images.githubusercontent.com/74895809/178614928-221c294d-b2f7-4344-b5dc-5980dd7ec99d.png',
      'https://user-images.githubusercontent.com/74895809/178613948-9cea02b7-c4f5-4892-877d-6725846cb24d.png',
      'https://user-images.githubusercontent.com/74895809/178614035-f1aa8d41-38ae-44b3-8bab-d651778b18ba.png',
    ],
  },
];

export default products;
