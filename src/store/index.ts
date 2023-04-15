import { GraphData } from 'react-force-graph-3d';
import { create } from 'zustand';

type ChatState = {
  messages: string[];
  sendQuestion: (message: string) => void;
  clearMessage: () => void;
};

export const useChatStore = create<ChatState>(set => ({
  messages: ['你好'],
  sendQuestion: (message: string) => set(state => (
    {
      messages: [...state.messages, message]
    })),
  clearMessage: () => set(state => ({ messages: [] })),
}));


type GraphState = {
  graphData: GraphData,
  setGraphData: (graphData: GraphData) => void;
};

export const useGraphStore = create<GraphState>(set => ({
  graphData: {} as GraphData,
  setGraphData: (graphData: GraphData) =>
    set(state => ({
      graphData: graphData
    })),
}));
