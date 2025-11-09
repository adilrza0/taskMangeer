export const formatDate = (date) => {
  // Get the month, day, and year
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export function dateFormatter(dateString) {
  const inputDate = new Date(dateString);

  if (isNaN(inputDate)) {
    return "Invalid Date";
  }

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getInitials(fullName) {
  const names = fullName.split(" ");

  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = initials.join("");

  return initialsStr;
}

export const PRIOTITYSTYELS = {
  high: "text-red-600",
  medium: "text-yellow-600",
  low: "text-blue-600",
};

export const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

export const BGS = [
  "bg-blue-600",
  "bg-yellow-600",
  "bg-red-600",
  "bg-green-600",
];

export function getUniqueObjects(array1, array2) {
  // Combine both arrays
  

  // Create a map to keep track of unique ids
  const uniqueMap = new Map();

  // Iterate over the combined array
  array1.forEach((item) => {
    // Add each item to the map, using id as the key
    if (!uniqueMap.has(item._id)) {
      uniqueMap.set(item._id, item);
    }
  });
  array2.forEach((item) => {
    // Add each item to the map, using id as the key
    if (!uniqueMap.has(item._id)) {
      uniqueMap.set(item._id, item);
    }
  });

  // Convert the map back to an array
  return Array.from(uniqueMap.values());
}