interface HistoryItem {
  input: string;
  output: string;
}

export function createHistory() {
  let history: HistoryItem[] = JSON.parse(localStorage.getItem("calcHistory") || "[]");

  function save(): void {
    localStorage.setItem("calcHistory", JSON.stringify(history));
  }

  return {
    add(input: string, output: string): void {
      history.unshift({ input, output });
      save();
    },

    getAll(): HistoryItem[] {
      return history;
    },

    clear(): void {
      history = [];
      save();
    }
  };
}