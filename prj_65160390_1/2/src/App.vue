<template>
  <div class="container">
    <h1>Eisenhower Matrix Task Manager</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="taskText" placeholder="Add task...">
      <select v-model="priority" id="prioritySelect">
        <option value="important-urgent">Important & Urgent</option>
        <option value="important-not-urgent">Important & Not Urgent</option>
        <option value="not-important-urgent">Not Important & Urgent</option>
        <option value="not-important-not-urgent">Not Important & Not Urgent</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
    <div class="tasks-container">
      <div class="task-list" id="importantUrgentTasks">
        <h2>Important & Urgent</h2>
        <ul>
          <li v-for="task in importantUrgentTasks" :key="task.id">
            {{ task.text }}
            <button @click="deleteTask(task.id)">Delete</button>
            <button @click="editTask(task.id)">Edit</button>
          </li>
        </ul>
      </div>
      <!-- Other task lists go here -->
      <div class="task-list" id="importantNotUrgentTasks">
        <h2>Important & Not Urgent</h2>
        <ul>
          <li v-for="task in importantNotUrgentTasks" :key="task.id">
            {{ task.text }}
            <button @click="deleteTask(task.id)">Delete</button>
            <button @click="editTask(task.id)">Edit</button>
          </li>
        </ul>
      </div>
      <div class="task-list" id="notimportantUrgentTasks">
        <h2>Not Important & Urgent</h2>
        <ul>
          <li v-for="task in notimportantUrgentTasks" :key="task.id">
            {{ task.text }}
            <button @click="deleteTask(task.id)">Delete</button>
            <button @click="editTask(task.id)">Edit</button>
          </li>
        </ul>
      </div>
      <div class="task-list" id="notimportantNotUrgentTasks">
        <h2>Not Important & Not Urgent</h2>
        <ul>
          <li v-for="task in notimportantNotUrgentTasks" :key="task.id">
            {{ task.text }}
            <button @click="deleteTask(task.id)">Delete</button>
            <button @click="editTask(task.id)">Edit</button>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskText: '',
      priority: 'important-urgent',
      tasks: [
        { id: 1, text: 'Task 1', priority: 'important-urgent' },
        { id: 2, text: 'Task 2', priority: 'important-not-urgent' },
        { id: 3, text: 'Task 3', priority: 'not-important-urgent' },
        { id: 4, text: 'Task 4', priority: 'not-important-not-urgent' }
      ]
    };
  },
  computed: {
    importantUrgentTasks() {
      return this.tasks.filter(task => task.priority === 'important-urgent');
    },
    // Add computed properties for other task lists
    importantNotUrgentTasks() {
      return this.tasks.filter(task => task.priority === 'important-not-urgent');
    },
    notimportantUrgentTasks() {
      return this.tasks.filter(task => task.priority === 'not-important-urgent');
    },
    notimportantNotUrgentTasks() {
      return this.tasks.filter(task => task.priority === 'not-important-not-urgent');
    },
  },
  methods: {
    addTask() {
      if (this.taskText.trim() === '') return;
      this.tasks.push({
        id: Date.now(),
        text: this.taskText.trim(),
        priority: this.priority
      });
      this.taskText = '';
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    editTask(id) {
      const newText = prompt('Enter the new task text:');
      if (newText !== null && newText.trim() !== '') {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
          this.tasks[taskIndex].text = newText.trim();
        }
      }
    }
    // Add methods for other actions like updating task priority
  }
};
</script>

<style scoped>
/* CSS Styles Here */
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #C0D6E8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #A34343;
}

form {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}

#taskInput {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

#prioritySelect {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #E9C874;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* .tasks-container {
  display: flex;
  justify-content: space-between;
} */

.task-list {
  flex: 1;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
}

.task-list h2 {
  margin-top: 0;
  color: #795458;
}

.task-list ul {
  list-style-type: none;
  padding: 0;
}

.task {
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
}

.task button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: #3e1b1b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
