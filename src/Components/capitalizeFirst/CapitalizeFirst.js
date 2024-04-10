export const CapitalizeFirst = ({ str }) => {
  console.log("Str in CapitalizeFirst", str)
  if(!str) return
  return str.charAt(0).toUpperCase() + str.slice(1);
};
