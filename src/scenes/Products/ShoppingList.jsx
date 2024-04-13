// import React, { useEffect, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import Item from "../../components/Item";
// import { Typography } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useDispatch, useSelector } from "react-redux";
// import { setItems } from "../../state";
//
// const ShoppingList = () => {
//     const dispatch = useDispatch();
//     const [value, setValue] = useState("all");
//     const items = useSelector((state) => state.cart.items);
//     const breakPoint = useMediaQuery("(min-width:600px)");
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     async function getItems() {
//         const items = await fetch(
//             "http://localhost:1337/api/items?populate=image",
//             { method: "GET" }
//         );
//         const itemsJson = await items.json();
//         dispatch(setItems(itemsJson.data));
//     }
//
//     useEffect(() => {
//         getItems();
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps
//
//     const soaps = items.filter(
//         (item) => item.attributes.category === "soaps"
//     );
//     const churchProducts = items.filter(
//         (item) => item.attributes.category === "churchProducts"
//     );
//     const herbs = items.filter(
//         (item) => item.attributes.category === "herbs"
//     );
//     const incense = items.filter(
//         (item) => item.attributes.category === "incense"
//     );
//     const materials = items.filter(
//         (item) => item.attributes.category === "materials"
//     );
//     const mixtures = items.filter(
//         (item) => item.attributes.category === "mixtures"
//     );
//     const oils = items.filter(
//         (item) => item.attributes.category === "oils"
//     );
//     const otc = items.filter(
//         (item) => item.attributes.category === "otc"
//     );
//     const salts = items.filter(
//         (item) => item.attributes.category === "salts"
//     );
//     const sexProducts = items.filter(
//         (item) => item.attributes.category === "sexProducts"
//     );
//     const tradionalAfrican = items.filter(
//         (item) => item.attributes.category === "traditionalAfrican"
//     );
//     const vaseline = items.filter(
//         (item) => item.attributes.category === "vaseline"
//     );
//     const water = items.filter(
//         (item) => item.attributes.category === "water"
//     );
//     const beads = items.filter(
//         (item) => item.attributes.category === "beads"
//     );
//
//
//
//
//     return (
//         <Box
//             sx={{
//                 minHeight: "calc(100vh - 120px)", // Adjust based on the height of your header/footer
//                 display: "flex",
//                 flexDirection: "column"
//             }}
//         >
//             <Box width="80%" margin="80px auto">
//                 <Typography variant="h3" textAlign="center">
//                     Our Featured <b>Products</b>
//                 </Typography>
//                 <Tabs
//                     textColor="primary"
//                     indicatorColor="primary"
//                     value={value}
//                     onChange={handleChange}
//                     centered
//                     TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
//                     sx={{
//                         m: "25px",
//                         "& .MuiTabs-flexContainer": {
//                             flexWrap: "wrap",
//                         },
//                     }}
//                 >
//                     <Tab label="ALL" value="all" />
//                     <Tab label="Soaps" value="soaps" />
//                     <Tab label="Church Products" value="churchProducts" />
//                     <Tab label="Herbs" value="herbs" />
//                     <Tab label="Incense" value="incense" />
//                     <Tab label="Materials" value="materials" />
//                     <Tab label="Mixtures" value="mixtures" />
//                     <Tab label="Oils" value="oils" />
//                     <Tab label="OTC" value="otc" />
//                     <Tab label="Salts" value="salts" />
//                     <Tab label="Sex Products" value="sexProducts" />
//                     <Tab label="Traditional African" value="traditionalAfrican" />
//                     <Tab label="Vaseline" value="vaseline" />
//                     <Tab label="Water" value="water" />
//                     <Tab label="Beads" value="beads" />
//
//                 </Tabs>
//                 <Box
//                     margin="0 auto"
//                     display="grid"
//                     gridTemplateColumns="repeat(auto-fill, 300px)"
//                     justifyContent="space-around"
//                     rowGap="20px"
//                     columnGap="1.33%"
//                 >
//                     {value === "all" &&
//                         items.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "soaps" &&
//                         soaps.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "churchProducts" &&
//                         churchProducts.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "herbs" &&
//                         herbs.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "incense" &&
//                         incense.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "materials" &&
//                         materials.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "mixtures" &&
//                         mixtures.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "oils" &&
//                         oils.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "otc" &&
//                         otc.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "salts" &&
//                         salts.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "sexProducts" &&
//                         sexProducts.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "traditionalAfrican" &&
//                         tradionalAfrican.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "vaseline" &&
//                         vaseline.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "beads" &&
//                         beads.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                     {value === "water" &&
//                         water.map((item) => (
//                             <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
//                         ))}
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
//
// export default ShoppingList;

import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const breakPoint = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 120px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <Box width="80%" margin="80px auto" >
                <Box
                    sx={{
                        mt: 2, // Adjusted margin top
                        p: 2,
                        borderRadius: '50px', // Circular edges
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Shadow effect
                        display: 'inline-block', // Fits the box to the content length
                        backgroundColor: "#BB6A84",
                    }}
                >
                    <Typography variant="h3" textAlign="center" >
                        Our Featured <b>Products</b>
                    </Typography>
                </Box>
                <Tabs
                    textColor="primary"
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
                    sx={{
                        m: "25px",
                        "& .MuiTabs-flexContainer": {
                            flexWrap: "wrap",
                        },
                    }}
                >
                    <Tab label="ALL" value="all" />
                    <Tab label="Soaps" value="soaps" />
                    <Tab label="Church Products" value="churchProducts" />
                    <Tab label="Herbs" value="herbs" />
                    <Tab label="Incense" value="incense" />
                    <Tab label="Materials" value="materials" />
                    <Tab label="Mixtures" value="mixtures" />
                    <Tab label="Oils" value="oils" />
                    <Tab label="OTC" value="otc" />
                    <Tab label="Salts" value="salts" />
                    <Tab label="Sex Products" value="sexProducts" />
                    <Tab label="Traditional African" value="traditionalAfrican" />
                    <Tab label="Vaseline" value="vaseline" />
                    <Tab label="Water" value="water" />
                    <Tab label="Beads" value="beads" />
                </Tabs>
                <Box
                    margin="0 auto"
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, 300px)"
                    justifyContent="space-around"
                    rowGap="20px"
                    columnGap="1.33%"
                >
                    {items.filter(item => value === "all" || item.attributes.category === value).map((item) => (
                        <Item item={item} key={`${item.attributes.name}-${item.attributes.id}`} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ShoppingList;

