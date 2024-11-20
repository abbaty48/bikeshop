import { TDatabase } from './types';

export const db = function () {
    const db: TDatabase = {
        users: [],
        products: [
            {
                "id": "a9d1f0c0-83b7-4e3b-a763-6219c7011f2f",
                "name": "Mountain Beast 3000",
                "price": 899.99,
                "description": "A rugged mountain bike designed for tough terrains.",
                "kind": "bike",
                "image": "https://example.com/mountain-beast-3000.jpg"
            },
            {
                "id": "7c1b6a21-87e2-4e0c-9437-c204d6a54cb2",
                "name": "Urban Cruiser",
                "price": 549.50,
                "description": "A stylish bike perfect for city commuting.",
                "kind": "bike",
                "image": "https://example.com/urban-cruiser.jpg"
            },
            {
                "id": "1d3c63cb-d29f-4f59-89cf-99fa7ded0522",
                "name": "Pro Racer 2021",
                "price": 1200.00,
                "description": "Lightweight and aerodynamic for professional racing.",
                "kind": "bike",
                "image": "https://example.com/pro-racer-2021.jpg"
            },
            {
                "id": "64809e31-5f5e-4f59-a0ef-b08aa3cd5acc",
                "name": "Comfort Ride Saddle",
                "price": 49.99,
                "description": "An ergonomic saddle that offers maximum comfort.",
                "kind": "accessory",
                "image": "https://example.com/comfort-ride-saddle.jpg"
            },
            {
                "id": "684c1997-fbdb-49d2-8c6b-239c11eb8676",
                "name": "Hydration Pack",
                "price": 39.99,
                "description": "Stay hydrated on the go with this practical hydration pack.",
                "kind": "accessory",
                "image": "https://example.com/hydration-pack.jpg"
            },
            {
                "id": "35f61678-c77f-4f5e-a607-d0e8ea2e7453",
                "name": "Helmet Plus",
                "price": 79.99,
                "description": "A stylish helmet that meets all safety standards.",
                "kind": "accessory",
                "image": "https://example.com/helmet-plus.jpg"
            },
            {
                "id": "b7e6e951-ba20-45c4-a4ae-251a6a5a1aa4",
                "name": "Touring Pro 500",
                "price": 1149.99,
                "description": "Perfect for long-distance touring with great storage.",
                "kind": "bike",
                "image": "https://example.com/touring-pro-500.jpg"
            },
            {
                "id": "541f5f4b-9ff1-4c56-90fa-a9bb385076e3",
                "name": "Lightweight Carbon Frame",
                "price": 749.00,
                "description": "A high-quality carbon frame that is both lightweight and durable.",
                "kind": "bike",
                "image": "https://example.com/lightweight-carbon-frame.jpg"
            },
            {
                "id": "e3279a0d-3c6b-4227-9931-c5fe5b834f9e",
                "name": "Folding Bike Xtreme",
                "price": 399.99,
                "description": "A compact folding bike that’s great for city dwellers.",
                "kind": "bike",
                "image": "https://example.com/folding-bike-xtreme.jpg"
            },
            {
                "id": "0e6786af-dc65-4594-8c47-b9effe1bd9cd",
                "name": "Multi-tool Kit",
                "price": 24.99,
                "description": "A compact multi-tool for all your bike maintenance needs.",
                "kind": "accessory",
                "image": "https://example.com/multi-tool-kit.jpg"
            },
            {
                "id": "b3ff70dd-4d11-48eb-b64d-65c1f097bd6b",
                "name": "Rugged Trail Blazer",
                "price": 799.99,
                "description": "Adventure-ready bike for all types of trails.",
                "kind": "bike",
                "image": "https://example.com/rugged-trail-blazer.jpg"
            },
            {
                "id": "c4ae234a-b792-4d0f-b300-e5d50feabca8",
                "name": "Bike Lock Guardian",
                "price": 29.99,
                "description": "A reliable lock to keep your bike secure.",
                "kind": "accessory",
                "image": "https://example.com/bike-lock-guardian.jpg"
            },
            {
                "id": "1695f78d-3238-47f3-979d-87d7e3a3a61e",
                "name": "Speedster Pro",
                "price": 1299.00,
                "description": "Built for speed, this bike is perfect for racers.",
                "kind": "bike",
                "image": "https://example.com/speedster-pro.jpg"
            },
            {
                "id": "e6d1045c-c689-45b5-bc02-2d9e70010d2e",
                "name": "Bike Cleaning Kit",
                "price": 19.99,
                "description": "Everything you need to keep your bike clean.",
                "kind": "accessory",
                "image": "https://example.com/bike-cleaning-kit.jpg"
            },
            {
                "id": "61d36773-90f1-413c-8644-e407bcb38d13",
                "name": "E-Cruiser",
                "price": 1899.99,
                "description": "Electric bike for an effortless ride.",
                "kind": "bike",
                "image": "https://example.com/e-cruiser.jpg"
            },
            {
                "id": "ca7c691f-8666-468f-b979-e11f05737595",
                "name": "All-Terrain Tires",
                "price": 75.00,
                "description": "Versatile tires that work well on any surface.",
                "kind": "accessory",
                "image": "https://example.com/all-terrain-tires.jpg"
            },
            {
                "id": "f2369acd-e0a2-4de7-b05b-ddd3099c8e80",
                "name": "Racer's Edge",
                "price": 1500.00,
                "description": "High-performance bike designed for competitive riders.",
                "kind": "bike",
                "image": "https://example.com/racers-edge.jpg"
            },
            {
                "id": "706c5fd1-6320-4343-bc2f-b0ce5a0a65ed",
                "name": "Bright LED Headlight",
                "price": 19.99,
                "description": "Illuminate your path with this high-intensity LED headlight.",
                "kind": "accessory",
                "image": "https://example.com/bright-led-headlight.jpg"
            },
            {
                "id": "37f8ed37-1fd4-4a5d-a43a-7aa5c8a18c61",
                "name": "Commuter 7-Speed",
                "price": 499.99,
                "description": "Ideal for city cycling with multiple speed options.",
                "kind": "bike",
                "image": "https://example.com/commuter-7-speed.jpg"
            },
            {
                "id": "8d3bdb1e-3c30-4e17-9c16-6bb1a4b7ab73",
                "name": "Bike Bag Organizer",
                "price": 39.99,
                "description": "Keep all your gear organized with this bike bag.",
                "kind": "accessory",
                "image": "https://example.com/bike-bag-organizer.jpg"
            },
            {
                "id": "f8cdbbba-067d-4e21-abef-6e0e7304c0e0",
                "name": "Fat Tire Cruiser",
                "price": 699.99,
                "description": "Built for stability and comfort on all terrains.",
                "kind": "bike",
                "image": "https://example.com/fat-tire-cruiser.jpg"
            },
            {
                "id": "8702fac5-2736-4b62-b774-59434d59bef4",
                "name": "Padded Bike Shorts",
                "price": 49.99,
                "description": "Comfortable shorts designed for long rides.",
                "kind": "accessory",
                "image": "https://example.com/padded-bike-shorts.jpg"
            },
            {
                "id": "1d68318d-4d73-4b1e-8ca0-fc1a8841cfc8",
                "name": "Hydraulic Disc Brakes",
                "price": 299.00,
                "description": "Advanced braking system for superior control.",
                "kind": "accessory",
                "image": "https://example.com/hydraulic-disc-brakes.jpg"
            },
            {
                "id": "e3842904-1c14-44bd-a18d-aba37444d7a9",
                "name": "City Explorer",
                "price": 479.99,
                "description": "A stylish bike for urban exploration.",
                "kind": "bike",
                "image": "https://example.com/city-explorer.jpg"
            },
            {
                "id": "1ce0e577-7f58-43ba-8d1d-4faecd5dbcbd",
                "name": "Bike Floor Pump",
                "price": 39.99,
                "description": "Inflate your tires with ease using this reliable pump.",
                "kind": "accessory",
                "image": "https://example.com/bike-floor-pump.jpg"
            },
            {
                "id": "f778fb37-bd7a-4782-8af0-3d148561e2c6",
                "name": "Hybrid Bike 2022",
                "price": 599.99,
                "description": "A versatile bike for both on and off-road adventures.",
                "kind": "bike",
                "image": "https://example.com/hybrid-bike-2022.jpg"
            },
            {
                "id": "24c28b64-9568-4c40-8678-f5021e2750d4",
                "name": "Knee Pads",
                "price": 24.99,
                "description": "Protect your knees while riding with these durable pads.",
                "kind": "accessory",
                "image": "https://example.com/knee-pads.jpg"
            },
            {
                "id": "7ad9e5b2-fd85-4d67-99b8-be218db76c02",
                "name": "Enduro Performance",
                "price": 1099.99,
                "description": "Designed for those who seek high-speed thrill and performance.",
                "kind": "bike",
                "image": "https://example.com/enduro-performance.jpg"
            },
            {
                "id": "8ed7ffe1-0ffc-4747-8b01-cd7acb32fe32",
                "name": "Mini Bike Pump",
                "price": 19.99,
                "description": "A compact pump that easily fits in your pocket.",
                "kind": "accessory",
                "image": "https://example.com/mini-bike-pump.jpg"
            },
            {
                "id": "0cb00862-b94b-4e1a-b0d8-24243f597262",
                "name": "Street Racer 300",
                "price": 899.00,
                "description": "A fast bike perfect for street and track races.",
                "kind": "bike",
                "image": "https://example.com/street-racer-300.jpg"
            },
            {
                "id": "5c754ad8-4cf8-46dd-92ee-b5ec64acead2",
                "name": "Reflective Safety Vest",
                "price": 29.99,
                "description": "Stay visible and safe with this bright reflective vest.",
                "kind": "accessory",
                "image": "https://example.com/reflective-safety-vest.jpg"
            },
            {
                "id": "bee7e50c-e506-4637-a6d9-f9d990814b5a",
                "name": "Electric Mountain Bike",
                "price": 2399.00,
                "description": "Conquer hills effortlessly with this electric mountain bike.",
                "kind": "bike",
                "image": "https://example.com/electric-mountain-bike.jpg"
            },
            {
                "id": "b87a2572-bb63-484d-8caf-882d5196d5d5",
                "name": "Bike GPS Tracker",
                "price": 49.99,
                "description": "Keep track of your bike's location with this GPS tracker.",
                "kind": "accessory",
                "image": "https://example.com/bike-gps-tracker.jpg"
            },
            {
                "id": "bda58921-d826-4147-bdb0-8714a66bffe4",
                "name": "Long-Distance Cyclist",
                "price": 1299.99,
                "description": "Designed for comfort and speed over long distances.",
                "kind": "bike",
                "image": "https://example.com/long-distance-cyclist.jpg"
            },
            {
                "id": "e183b56e-3f01-4c79-8d14-7eaf910d8c8e",
                "name": "Cycling Sunglasses",
                "price": 39.99,
                "description": "Stylish and protective sunglasses for cyclists.",
                "kind": "accessory",
                "image": "https://example.com/cycling-sunglasses.jpg"
            },
            {
                "id": "1d65f5ef-ae8d-4bb4-a49e-31e992bc008f",
                "name": "Cargo Bike 2021",
                "price": 1099.00,
                "description": "Ideal for carrying cargo with stability and ease.",
                "kind": "bike",
                "image": "https://example.com/cargo-bike-2021.jpg"
            },
            {
                "id": "4c96b933-8b5e-4d75-88e3-f5e6a5e40a12",
                "name": "Bike Seat Cover",
                "price": 24.99,
                "description": "Protect your seat from rain and scratches with this cover.",
                "kind": "accessory",
                "image": "https://example.com/bike-seat-cover.jpg"
            },
            {
                "id": "60f369af-0773-47a2-ba38-632fdb914d24",
                "name": "Performance Hybrid",
                "price": 999.99,
                "description": "Combining speed and ruggedness for adventure seekers.",
                "kind": "bike",
                "image": "https://example.com/performance-hybrid.jpg"
            },
            {
                "id": "76a94e38-617a-4b0c-99e4-3cc631e6e35f",
                "name": "Adjustable Bike Stand",
                "price": 59.99,
                "description": "Easily adjust this bike stand for convenient repairs.",
                "kind": "accessory",
                "image": "https://example.com/adjustable-bike-stand.jpg"
            },
            {
                "id": "191b0960-d164-4159-a2e6-1f61c1a64c46",
                "name": "Family Cargo Bike",
                "price": 1399.00,
                "description": "Perfect for families, offering space for children and gear.",
                "kind": "bike",
                "image": "https://example.com/family-cargo-bike.jpg"
            },
            {
                "id": "9a3914e9-8f3d-4acc-93b4-b3edd8a069c9",
                "name": "Bluetooth Bike Speaker",
                "price": 89.99,
                "description": "Enjoy your favorite tunes while riding.",
                "kind": "accessory",
                "image": "https://example.com/bluetooth-bike-speaker.jpg"
            },
            {
                "id": "42efbbce-1c30-44ea-b2ce-84c49d2026df",
                "name": "Adjustable Handlebar",
                "price": 35.00,
                "description": "Easily adjust your handlebar for a comfortable fit.",
                "kind": "accessory",
                "image": "https://example.com/adjustable-handlebar.jpg"
            },
            {
                "id": "e823440b-f87b-462c-b959-2902388ecf4f",
                "name": "Crankset Upgrade",
                "price": 300.00,
                "description": "Upgrade your crankset for better performance.",
                "kind": "accessory",
                "image": "https://example.com/crankset-upgrade.jpg"
            },
            {
                "id": "93b8e276-bcf0-48f2-a3ab-249d2a6e1e11",
                "name": "Rugged Commuter",
                "price": 899.99,
                "description": "A sturdy bike perfect for daily commuting.",
                "kind": "bike",
                "image": "https://example.com/rugged-commuter.jpg"
            },
            {
                "id": "aa15f1f5-6f82-4cb9-bc01-075bbf5bab87",
                "name": "Bike Computer",
                "price": 29.99,
                "description": "Track your speed, distance, and more with this bike computer.",
                "kind": "accessory",
                "image": "https://example.com/bike-computer.jpg"
            },
            {
                "id": "f8df6890-e96d-4b39-b2c9-d47c284b12fb",
                "name": "Adventure Cyclist",
                "price": 1349.99,
                "description": "Built for those who love off-road cycling.",
                "kind": "bike",
                "image": "https://example.com/adventure-cyclist.jpg"
            },
            {
                "id": "395c2e96-5778-4a54-ba4f-c53772f21f47",
                "name": "Bike Phone Mount",
                "price": 14.99,
                "description": "Keep your phone accessible while you ride.",
                "kind": "accessory",
                "image": "https://example.com/bike-phone-mount.jpg"
            },
            {
                "id": "e2cc2c15-c4d2-4d18-af28-752f77ddd9c1",
                "name": "Trail Explorer 5.0",
                "price": 1199.99,
                "description": "Engineered for extreme trail riding.",
                "kind": "bike",
                "image": "https://example.com/trail-explorer-5.jpg"
            },
            {
                "id": "3f796529-83db-4917-b7e8-81e9b0366b92",
                "name": "Essential Bike Tool",
                "price": 12.99,
                "description": "A multi-use tool essential for every cyclist.",
                "kind": "accessory",
                "image": "https://example.com/essential-bike-tool.jpg"
            },
            {
                "id": "64a110e6-e257-40cc-acee-b56412993d12",
                "name": "Lightweight Folding Bike",
                "price": 599.00,
                "description": "Convenient and portable, perfect for city life.",
                "kind": "bike",
                "image": "https://example.com/lightweight-folding-bike.jpg"
            },
            {
                "id": "ec9a618a-cd91-4635-91e6-6f0c41efb4e7",
                "name": "Bike Travel Bag",
                "price": 129.99,
                "description": "Protect your bike while traveling with this travel bag.",
                "kind": "accessory",
                "image": "https://example.com/bike-travel-bag.jpg"
            },
            {
                "id": "59bc5c72-cd88-4387-9d34-65cb8ebfd99f",
                "name": "Trackmaster 2019",
                "price": 999.99,
                "description": "Fast and responsive bike for track enthusiasts.",
                "kind": "bike",
                "image": "https://example.com/trackmaster-2019.jpg"
            },
            {
                "id": "01360bd8-f8a8-48ab-9b89-bbaf1f52ae3d",
                "name": "Safety Lights",
                "price": 29.99,
                "description": "Ensure safety during night rides with these lights.",
                "kind": "accessory",
                "image": "https://example.com/safety-lights.jpg"
            },
            {
                "id": "96555fd4-50e8-4487-8350-1815cd61c4e5",
                "name": "Endurance Road Bike",
                "price": 1349.99,
                "description": "Perfect for long rides on the open road.",
                "kind": "bike",
                "image": "https://example.com/endurance-road-bike.jpg"
            },
            {
                "id": "2f966d36-7b3e-4e82-8358-1b7a8d8db481",
                "name": "Bike Rearview Mirror",
                "price": 19.99,
                "description": "Stay aware of your surroundings while cycling.",
                "kind": "accessory",
                "image": "https://example.com/bike-rearview-mirror.jpg"
            },
            {
                "id": "fdbe9f61-7b21-4696-afec-26691f07f3b1",
                "name": "Fitness Bike 2022",
                "price": 799.99,
                "description": "A great bike for fitness enthusiasts looking to stay active.",
                "kind": "bike",
                "image": "https://example.com/fitness-bike-2022.jpg"
            },
            {
                "id": "f4673a30-6428-4fb2-be9a-94d1f3f12375",
                "name": "Sleek Handlebar Grips",
                "price": 15.99,
                "description": "Upgrade your ride with comfortable handlebar grips.",
                "kind": "accessory",
                "image": "https://example.com/sleek-handlebar-grips.jpg"
            },
            {
                "id": "2f89b235-a64d-445d-b527-fe6a082e0ccc",
                "name": "Cargo Classic Bike",
                "price": 1049.00,
                "description": "Ideal for those who need to carry extra load.",
                "kind": "bike",
                "image": "https://example.com/cargo-classic-bike.jpg"
            },
            {
                "id": "e8658e7f-727b-43e4-9439-970cc5dc5831",
                "name": "Cyclist Water Bottle",
                "price": 12.99,
                "description": "Stay refreshed on your rides with this water bottle.",
                "kind": "accessory",
                "image": "https://example.com/cyclist-water-bottle.jpg"
            },
            {
                "id": "7eabc762-90ed-4523-933c-b26e46c7d4a7",
                "name": "Performance Racing Bike",
                "price": 1599.99,
                "description": "Maximize your speed and efficiency on the raceway.",
                "kind": "bike",
                "image": "https://example.com/performance-racing-bike.jpg"
            },
            {
                "id": "8cabd3e8-697c-47b2-9351-5fe60db1f659",
                "name": "Saddle Bag",
                "price": 29.99,
                "description": "Store your essentials while on-the-go with this saddle bag.",
                "kind": "accessory",
                "image": "https://example.com/saddle-bag.jpg"
            },
            {
                "id": "7aefc850-dc43-411f-bd58-e59aa340a61e",
                "name": "Rugged Road Bike",
                "price": 1149.00,
                "description": "Built to handle everything from trails to the road.",
                "kind": "bike",
                "image": "https://example.com/rugged-road-bike.jpg"
            },
            {
                "id": "cf36cc5e-f87c-41fa-9852-20c20ffb68f3",
                "name": "Mini Tool Pouch",
                "price": 22.99,
                "description": "Carry essential tools with you while riding.",
                "kind": "accessory",
                "image": "https://example.com/mini-tool-pouch.jpg"
            },
            {
                "id": "8e8bb15c-4407-4f8d-9148-db1abf035793",
                "name": "Adventure Mountain Trail",
                "price": 999.00,
                "description": "Tough and reliable for mountain adventures.",
                "kind": "bike",
                "image": "https://example.com/adventure-mountain-trail.jpg"
            },
            {
                "id": "6ec46c03-f584-4e09-aa8f-5cc34b2bfba3",
                "name": "Bicycle First Aid Kit",
                "price": 34.99,
                "description": "Stay prepared for any mishaps with this first aid kit.",
                "kind": "accessory",
                "image": "https://example.com/bicycle-first-aid-kit.jpg"
            },
            {
                "id": "2c93bc7d-fb0b-4264-b199-f9e2046ecbc5",
                "name": "Urban Sport Bike",
                "price": 750.00,
                "description": "Designed for fast rides in urban settings.",
                "kind": "bike",
                "image": "https://example.com/urban-sport-bike.jpg"
            },
            {
                "id": "23f27909-0fa0-492e-94bc-1eee37069c59",
                "name": "Bike Security Alarm",
                "price": 49.99,
                "description": "Protect your bike with this security alarm system.",
                "kind": "accessory",
                "image": "https://example.com/bike-security-alarm.jpg"
            },
            {
                "id": "899fccf5-ce85-4adb-8300-02e08dc51c37",
                "name": "Cargo Hauler",
                "price": 869.99,
                "description": "Perfect bike for transporting goods easily.",
                "kind": "bike",
                "image": "https://example.com/cargo-hauler.jpg"
            },
            {
                "id": "d75ad202-7f73-4022-aad4-42efc3a0c2cd",
                "name": "Headlight with USB Charging",
                "price": 39.99,
                "description": "Stay bright with this USB-rechargeable headlight.",
                "kind": "accessory",
                "image": "https://example.com/headlight-usb-charging.jpg"
            },
            {
                "id": "258e9c2c-0cf1-4ba9-a7b3-33d4fb8963bc",
                "name": "Road Warrior",
                "price": 1399.99,
                "description": "A top-end bike for serious road cyclists.",
                "kind": "bike",
                "image": "https://example.com/road-warrior.jpg"
            },
            {
                "id": "e20f3c11-8c57-4752-bd88-464df2822095",
                "name": "Spare Tube",
                "price": 12.99,
                "description": "Always be prepared for a flat tire with this spare tube.",
                "kind": "accessory",
                "image": "https://example.com/spare-tube.jpg"
            },
            {
                "id": "bf1c90b5-d2f1-4130-b680-96d29b7fe304",
                "name": "All-Weather Bike",
                "price": 799.99,
                "description": "Built to withstand all kinds of weather conditions.",
                "kind": "bike",
                "image": "https://example.com/all-weather-bike.jpg"
            },
            {
                "id": "f8af4779-f92d-4b5e-9d0a-1f65d7c3995d",
                "name": "Bicycle Lock Cable",
                "price": 14.99,
                "description": "A flexible cable lock for easy security.",
                "kind": "accessory",
                "image": "https://example.com/bicycle-lock-cable.jpg"
            },
            {
                "id": "0305824a-7f60-4204-b3aa-9a3b38c52734",
                "name": "Carbon Fiber Racing Bike",
                "price": 2499.00,
                "description": "Top-notch performance bike for competitive racers.",
                "kind": "bike",
                "image": "https://example.com/carbon-fiber-racing-bike.jpg"
            },
            {
                "id": "d3fcb6fc-c8c8-4a39-af3b-5a6b41f934e5",
                "name": "Bike Rear Rack",
                "price": 49.99,
                "description": "Attachable rack for carrying gear.",
                "kind": "accessory",
                "image": "https://example.com/bike-rear-rack.jpg"
            },
            {
                "id": "32d0a22a-625f-4ffb-9c36-e10500874c4a",
                "name": "City Commuter Bike",
                "price": 549.99,
                "description": "Efficient and stylish for everyday rides.",
                "kind": "bike",
                "image": "https://example.com/city-commuter-bike.jpg"
            },
            {
                "id": "6c80e3e0-909f-4b8c-a983-19cba91c9bf6",
                "name": "Portable Bike Stand",
                "price": 39.99,
                "description": "Quick and easy bike maintenance on the go.",
                "kind": "accessory",
                "image": "https://example.com/portable-bike-stand.jpg"
            },
            {
                "id": "a000e6c4-fed6-4cae-ab46-41a8c5e94663",
                "name": "Speedy Touring Bike",
                "price": 1099.00,
                "description": "Speed-oriented bike for touring enthusiasts.",
                "kind": "bike",
                "image": "https://example.com/speedy-touring-bike.jpg"
            },
            {
                "id": "eca0880d-25e2-4f8b-adda-b0ccfa614c9d",
                "name": "Compact Hand Pump",
                "price": 19.99,
                "description": "Easily fits in your bag for emergencies.",
                "kind": "accessory",
                "image": "https://example.com/compact-hand-pump.jpg"
            },
            {
                "id": "a2b589e0-f8ab-4ce3-b17c-fc606f11dcd1",
                "name": "Light Speed Bike",
                "price": 1599.00,
                "description": "Top performance bike for fast riders.",
                "kind": "bike",
                "image": "https://example.com/light-speed-bike.jpg"
            },
            {
                "id": "006a5587-b63f-41a3-ab78-056434f927d9",
                "name": "Bike Handlebar Camera",
                "price": 89.99,
                "description": "Capture your rides with this handlebar camera.",
                "kind": "accessory",
                "image": "https://example.com/bike-handlebar-camera.jpg"
            },
            {
                "id": "0a234f38-b645-4ca6-b0c4-a2aa402bd163",
                "name": "Endurance Mountain",
                "price": 1349.00,
                "description": "A solid choice for tackling rough mountain trails.",
                "kind": "bike",
                "image": "https://example.com/endurance-mountain.jpg"
            },
            {
                "id": "8f72ad05-d498-47bb-82d0-6e2f5a5d8ea0",
                "name": "Bike Safety Bell",
                "price": 9.99,
                "description": "Alert pedestrians with this classic bike bell.",
                "kind": "accessory",
                "image": "https://example.com/bike-safety-bell.jpg"
            },
            {
                "id": "b99afe28-f08c-4e0c-bb01-172e911be9f9",
                "name": "Stealth Commuter",
                "price": 949.99,
                "description": "Sleek and efficient for inner-city travel.",
                "kind": "bike",
                "image": "https://example.com/stealth-commuter.jpg"
            },
            {
                "id": "79a2dbfd-f90c-426d-b3de-6982d7e4106f",
                "name": "Bike Workstand",
                "price": 99.99,
                "description": "Keep your bike stable while working on repairs.",
                "kind": "accessory",
                "image": "https://example.com/bike-workstand.jpg"
            },
            {
                "id": "4668a8d5-f5ad-4e47-aacc-d5e9a4b52961",
                "name": "Hardcore Off-Road Bike",
                "price": 1299.99,
                "description": "Designed for extreme off-road conditions.",
                "kind": "bike",
                "image": "https://example.com/hardcore-off-road-bike.jpg"
            },
            {
                "id": "4719d2f5-97f3-4d57-bd9b-3c781566b84d",
                "name": "Anti-Theft Bike Alarm",
                "price": 59.99,
                "description": "A reliable bike alarm to protect against theft.",
                "kind": "accessory",
                "image": "https://example.com/anti-theft-bike-alarm.jpg"
            },
            {
                "id": "0b8c3269-51ef-435b-8583-c5575017ac07",
                "name": "High-Performance BMX",
                "price": 899.00,
                "description": "Perfect for tricks and smooth rides.",
                "kind": "bike",
                "image": "https://example.com/high-performance-bmx.jpg"
            },
            {
                "id": "94454309-bce3-442f-bfe3-9ff25506c7bc",
                "name": "Pedal Wrench",
                "price": 16.99,
                "description": "Essential tool for bike enthusiasts.",
                "kind": "accessory",
                "image": "https://example.com/pedal-wrench.jpg"
            },
            {
                "id": "786b457f-80b3-4cd4-9836-a0fd064c5f5d",
                "name": "Fat Bike 2022",
                "price": 1099.99,
                "description": "Stable bike designed for snow and sand riding.",
                "kind": "bike",
                "image": "https://example.com/fat-bike-2022.jpg"
            },
            {
                "id": "f5f9bef7-2f8b-4f09-adaf-252456f68c9d",
                "name": "Locking U-Lock",
                "price": 27.99,
                "description": "Keep your bike secured with this strong U-lock.",
                "kind": "accessory",
                "image": "https://example.com/locking-u-lock.jpg"
            },
            {
                "id": "5ab0c8b0-3ce6-45af-b1fc-a24fe01fef96",
                "name": "Special Edition Racing Bike",
                "price": 2999.00,
                "description": "A high-end bike for serious racers.",
                "kind": "bike",
                "image": "https://example.com/special-edition-racing-bike.jpg"
            },
            {
                "id": "b7241ad1-0f7b-4ef4-a983-46a2720e1fdb",
                "name": "Portable Bike Toolkit",
                "price": 34.99,
                "description": "Compact toolkit for on-the-go repairs.",
                "kind": "accessory",
                "image": "https://example.com/portable-bike-toolkit.jpg"
            },
            {
                "id": "befafc8a-d819-4c07-ab0e-bcc8793e3a5f",
                "name": "Hybrid Cruiser",
                "price": 599.99,
                "description": "A comfortable ride for both city and country.",
                "kind": "bike",
                "image": "https://example.com/hybrid-cruiser.jpg"
            },
            {
                "id": "8b304620-f802-40e3-aa69-d800eb71512f",
                "name": "Bike Repair Stand",
                "price": 79.99,
                "description": "Easily repair or tune your bike at home.",
                "kind": "accessory",
                "image": "https://example.com/bike-repair-stand.jpg"
            },
            {
                "id": "92e70b08-1173-4c8b-bfea-3de273dc3b8c",
                "name": "Urban Trail Bike",
                "price": 899.00,
                "description": "Perfect for both urban commuting and light trails.",
                "kind": "bike",
                "image": "https://example.com/urban-trail-bike.jpg"
            },
            {
                "id": "c3af8338-2c29-4f29-be9e-b82ed19c23d3",
                "name": "Quick Release Skewers",
                "price": 19.99,
                "description": "Upgrade your wheel security with quick-release features.",
                "kind": "accessory",
                "image": "https://example.com/quick-release-skewers.jpg"
            },
            {
                "id": "005331ba-d754-4d90-8e94-e3312b994732",
                "name": "Trekking Bike 2022",
                "price": 1099.00,
                "description": "Designed for adventurous treks.",
                "kind": "bike",
                "image": "https://example.com/trekking-bike-2022.jpg"
            },
            {
                "id": "32a89d04-f0db-42bc-aebf-1c20973a864e",
                "name": "Fiber Road Bike",
                "price": 1299.00,
                "description": "Top of the line fiber bike for competitive cycling.",
                "kind": "bike",
                "image": "https://example.com/fiber-road-bike.jpg"
            },
            {
                "id": "1deb2999-ab54-4037-ad2d-4bfoe1a0fdec",
                "name": "Locking Bike Basket",
                "price": 44.99,
                "description": "Securely carry items on your bike with this locking basket.",
                "kind": "accessory",
                "image": "https://example.com/locking-bike-basket.jpg"
            }
        ]
    };

    /* POST */
    const post = <
        TKey extends keyof TDatabase,
        TTable extends TDatabase[TKey]>(table: TKey, callback: (record: TTable) => TTable) => {
        const record = db[table];
        db[table] = [...record, ...callback.call(null, db[table] as TTable)] as TTable
    }

    /* PUT */
    const put = <
        TKey extends keyof TDatabase,
        TTable extends TDatabase[TKey]>(table: TKey, callback: (record: TTable) => TTable) => {
        db[table] = callback.call(null, db[table] as TTable)
    }
    const del = <
        TKey extends keyof TDatabase,
        TTable extends TDatabase[TKey]>(table: TKey, callback: (record: TTable) => TTable) => {
        db[table] = callback.call(null, db[table] as TTable)
    }
    /* GET */
    const get = <TKey extends keyof TDatabase>(table: TKey) => {
        return db[table]
    }

    return { get, post, put, del };
}
