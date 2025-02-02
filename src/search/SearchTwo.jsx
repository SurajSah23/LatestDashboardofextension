import { useState } from 'react';

const companiesData = [
  {
    id: 1,
    name: 'Catalog',
    website: 'catalogapp.io',
    logo: 'https://i.ibb.co/yYbRRGs/Avatar-9.png',
    members: 22,
    contact: {
      name: 'Phoenix Baker',
      role: 'Co-Founder',
      location: 'United States',
      avatar: 'https://i.ibb.co/zXpvP7n/Avatar-15.png'
    }
  },
  {
    id: 2,
    name: 'Circooles',
    website: 'getcircooles.com',
    logo: 'https://i.ibb.co/NVdthvs/Avatar-10.png',
    members: 22,
    contact: {
      name: 'Lana Steiner',
      role: 'Founder',
      location: 'UK',
      avatar: 'https://i.ibb.co/D8h1ns4/Avatar-16.png'
    }
  },
  {
    id: 3,
    name: 'Command+R',
    website: 'cmdr.ai',
    logo: 'https://i.ibb.co/Z6GQFCr/Avatar-11.png',
    members: 22,
    contact: {
      name: 'Demi Wilkinson',
      role: 'Founder',
      location: 'US',
      avatar: 'https://i.ibb.co/bBr7Cnb/Avatar-17.png'
    }
  },
  {
    id: 4,
    name: 'Hourglass',
    website: 'hourglass.app',
    logo: 'https://i.ibb.co/7WBVbKs/Avatar-12.png',
    members: 22,
    contact: {
      name: 'Candice Wu',
      role: 'Lead Designer',
      location: 'India',
      avatar: 'https://i.ibb.co/3YTXpbz/Avatar-18.png'
    }
  },
  {
    id: 5,
    name: 'Layers',
    website: 'getlayers.io',
    logo: 'https://i.ibb.co/T8VMBVQ/Avatar-13.png',
    members: 22,
    contact: {
      name: 'Natali Craig',
      role: 'Lead Designer',
      location: 'United States',
      avatar: 'https://i.ibb.co/0X0RBbJ/Avatar-19.png'
    }
  },
  {
    id: 6,
    name: 'Quotient',
    website: 'quotient.co',
    logo: 'https://i.ibb.co/CB3skXt/Avatar-22.png',
    members: 22,
    contact: {
      name: 'Drew Cano',
      role: 'Co-Founder',
      location: 'New York, US',
      avatar: 'https://i.ibb.co/Sf33rjp/Avatar-21.png'
    }
  },
  {
    id: 7,
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 8, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
];

function SearchTwo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(companiesData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = companiesData.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-[997px] h-auto md:h-[856px] sm:ml-8 md:ml-14 mt-5 border border-gray-500 rounded-lg pb-6 sm:pb-10 pt-2 pl-2 sm:pl-4">
      {/* Header Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex space-x-2 sm:space-x-6 md:space-x-8 overflow-x-auto whitespace-nowrap">
          <button className="border-b-2 border-blue-500 pb-2 sm:pb-3 md:pb-4 px-1 sm:px-2 text-xs sm:text-sm font-medium text-blue-600">
            New(16.0M)
          </button>
          <button className="text-gray-500 pb-2 sm:pb-3 md:pb-4 px-1 sm:px-2 text-xs sm:text-sm font-medium hover:text-gray-700">
            Saved (0)
          </button>
          <button className="text-gray-500 pb-2 sm:pb-3 md:pb-4 px-1 sm:px-2 text-xs sm:text-sm font-medium hover:text-gray-700">
            Total(16.0M)
          </button>
        </nav>
      </div>

      {/* Table */}
      <div className="mt-4 sm:mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 sm:py-3 px-2 sm:px-3 text-left">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-2 sm:py-3 px-2 sm:px-3 text-left font-medium text-gray-500 uppercase">Company</th>
              <th className="py-2 sm:py-3 px-2 sm:px-3 text-left font-medium text-gray-500 uppercase">Members</th>
              <th className="py-2 sm:py-3 px-2 sm:px-3 text-left font-medium text-gray-500 uppercase">Contact</th>
              <th className="py-2 sm:py-3 px-2 sm:px-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentCompanies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="py-3 px-2 sm:py-4 sm:px-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-3 px-2 sm:py-4 sm:px-3">
                  <div className="flex items-center">
                    <img src={company.logo} alt={company.name} className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
                    <div className="ml-2 sm:ml-4">
                      <div className="font-medium text-gray-900">{company.name}</div>
                      <div className="text-gray-500">{company.website}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 sm:py-4 sm:px-3 text-gray-900">{company.members}</td>
                <td className="py-3 px-2 sm:py-4 sm:px-3">
                  <div className="flex items-center">
                    <img src={company.contact.avatar} alt={company.contact.name} className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
                    <div className="ml-2 sm:ml-4">
                      <div className="font-medium text-gray-900">{company.contact.name}</div>
                      <div className="text-gray-500">{company.contact.role}</div>
                      <div className="text-gray-500">{company.contact.location}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 sm:py-4 sm:px-3 text-right">
                  <button className="px-2 sm:px-3 py-1 text-blue-600 font-medium hover:bg-blue-50 rounded">
                    Show Mail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 border-t">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center text-gray-700 font-medium disabled:opacity-50 hover:text-gray-900"
        >
          <img src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png" alt="Previous" className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center text-gray-700 font-medium disabled:opacity-50 hover:text-gray-900"
        >
          Next
          <img src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png" alt="Next" className="w-3 sm:w-4 h-3 sm:h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}



export default SearchTwo;