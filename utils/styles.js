export const getPriorityStyle = (priority) => {
  const styles = {
    lav: {
      container: "bg-green-50 hover:bg-green-100",
      text: "text-green-700",
      border: "border-l-4 border-green-500",
      icon: "●"
    },
    mellem: {
      container: "bg-yellow-50 hover:bg-yellow-100",
      text: "text-yellow-700",
      border: "border-l-4 border-yellow-500",
      icon: "◆"
    },
    høj: {
      container: "bg-orange-50 hover:bg-orange-100",
      text: "text-orange-700",
      border: "border-l-4 border-orange-500",
      icon: "▲"
    },
    vigtigst: {
      container: "bg-red-50 hover:bg-red-100",
      text: "text-red-700",
      border: "border-l-4 border-red-500",
      icon: "⚠"
    }
  };
  return styles[priority] || styles.lav;
};
