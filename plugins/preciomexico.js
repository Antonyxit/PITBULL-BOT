const handler = async (m, {conn}) => {
  m.reply(global.mexico);
};
handler.command = /^(mexico|México)$/i;
export default handler;

global.mexico = `
⚔️  𝗠𝗲𝘅𝗶𝗰𝗼 ⚔️

𝗕𝗮𝗻𝗰𝗼 𝗔𝘇𝘁𝗲𝗰𝗮 : 
𝗕𝗮𝗻𝗰𝗼 𝗦𝘁𝗽 : 
𝗕𝗮𝗻𝗰𝗼 𝗕𝗮𝗻𝗼𝗿𝘁𝗲 : 
𝗧𝗶𝘁𝘂𝗹𝗮𝗿 : 

𝗡𝗼𝘁𝗮 : 𝟭 𝗩𝗲𝘇 𝗛𝗮𝗴𝗮𝘀 𝗘𝗹 𝗣𝗮𝗴𝗼 𝗣𝗮𝘀𝗮𝗿𝗮 𝗣𝗼𝗿 𝗘𝗹 𝗣𝗿𝗼𝗰𝗲𝘀𝗼 𝗗𝗲 𝗖𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗣𝗼𝗿 𝗟𝗼 𝗖𝘂𝗮𝗹 𝗟𝗲 𝗣𝗲𝗱𝗶𝗺𝗼𝘀 𝗖𝗮𝗽𝘁𝘂𝗿𝗮 𝗗𝗲𝗹 𝗣𝗮𝗴𝗼 𝗬 𝗡𝗼𝗺𝗯𝗿𝗲 𝗗𝗲𝗹 𝗤𝘂𝗲 𝗛𝗶𝘇𝗼 𝗘𝗹 𝗣𝗮𝗴𝗼 𝗚𝗿𝗮𝗰𝗶𝗮𝘀.
`;
