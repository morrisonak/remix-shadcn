// menuStateMachine.ts
import { createMachine, assign } from 'xstate';

// Define the context type
interface MenuContext {
  mainIndex: number;
  subIndex: number;
  menuTree: {
    name: string;
    items: string[];
  }[];
}

// Define the event types
type MenuEvent =
  | { type: 'MOVE_RIGHT' }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_DOWN' }
  | { type: 'MOVE_UP' };

// Assign actions
const incrementMainIndex = assign<MenuContext>({
  mainIndex: (context) => (context.mainIndex + 1) % context.menuTree.length,
});

const decrementMainIndex = assign<MenuContext>({
  mainIndex: (context) => (context.mainIndex - 1 + context.menuTree.length) % context.menuTree.length,
});

const incrementSubIndex = assign<MenuContext>({
  subIndex: (context) => (context.subIndex + 1) % context.menuTree[context.mainIndex].items.length,
});

const decrementSubIndex = assign<MenuContext>({
  subIndex: (context) => (context.subIndex - 1 + context.menuTree[context.mainIndex].items.length) % context.menuTree[context.mainIndex].items.length,
});

// Define the state machine
const menuMachine = createMachine<MenuContext, MenuEvent>({
  id: 'menu',
  initial: 'mainMenu',
  context: {
    mainIndex: 0,
    subIndex: 0,
    menuTree: [
      {
        name: 'Menu 1',
        items: ['Home', 'Submenu 1.2', 'Submenu 1.3']
      },
      {
        name: 'Menu 2',
        items: ['Submenu 2.1', 'Submenu 2.2', 'Submenu 2.3']
      },
      // Add more menu items as needed
    ],
  },
  states: {
    mainMenu: {
      on: {
        MOVE_RIGHT: {
          actions: incrementMainIndex,
        },
        MOVE_LEFT: {
          actions: decrementMainIndex,
        },
        MOVE_DOWN: 'subMenu',
      },
    },
    subMenu: {
      on: {
        MOVE_UP: {
          target: 'mainMenu', // Transition back to mainMenu state
          actions: decrementSubIndex,
        },
        MOVE_DOWN: {
          actions: incrementSubIndex,
        },
        // Optional: Add MOVE_LEFT or MOVE_RIGHT here if needed for additional navigation
      },
    },
  },
});

export default menuMachine;
