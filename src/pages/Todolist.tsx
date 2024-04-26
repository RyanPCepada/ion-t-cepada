import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonIcon } from '@ionic/react';

import { trashOutline, createOutline, add } from 'ionicons/icons'; // Import the add icon

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

import { trashOutline, createOutline } from 'ionicons/icons';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');


  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodoText,
          completed: false
        }
      ]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="todolist-title">
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent>
        <IonGrid>
          <IonRow style={{ marginBottom: '0.5em' }}>
            <IonCol>
            <IonInput
              placeholder="Enter a task"
              id="task_inputfield"
              value={newTodoText}
              onIonChange={(e: any) => setNewTodoText(e.target.value)}
              style={{
                fontSize: '25px',
                width: '340px',
                marginLeft: '10px',
                borderBottom: '1px solid gray', // Add white line below the input field
                backgroundColor: 'rgb(26, 26, 26)',    
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                paddingLeft: '20px'
              }}
            />

            </IonCol>
            <IonCol style={{ marginLeft: '0px'}}>
              <IonIcon icon={add} onClick={addTodo} style={{ fontSize: '35px', borderRadius: '50%', backgroundColor: 'var(--ion-color-primary)' }} />
            </IonCol>
          </IonRow>
          {todos.map(todo => (
            <IonRow key={todo.id} style={{ margin: '0.1 em 0' }}>
              <IonCol>
              <IonItem key={todo.id}>
                <IonLabel>
                    <h2 style={{ marginLeft: '30px', textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</h2>
                </IonLabel>
                <IonCheckbox
                    slot="start"
                    checked={todo.completed}
                    onIonChange={() => toggleTodo(todo.id)}
                    style={{ width: '20px', position: 'absolute', backgroundColor: 'transparent' }}
                />
                <IonButton fill="clear" onClick={() => {
                    const newText = prompt("Edit todo", todo.text);
                    if (newText !== null) {
                    editTodo(todo.id, newText);
                    }
                }}>
                    <IonIcon icon={createOutline} />
                </IonButton>
                <IonButton fill="clear" onClick={() => deleteTodo(todo.id)}>
                    <IonIcon icon={trashOutline} />
                </IonButton>
                </IonItem>

              </IonCol>
            </IonRow>
          ))}

        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#f0f0f0' }}>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <h1>Todo List</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonInput
                placeholder="Enter a task"
                value={newTodoText}
                onIonChange={(e) => setNewTodoText(e.detail.value!)}
              />
              <IonButton expand="block" onClick={addTodo}>Add Task</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonList>
                {todos.map(todo => (
                  <IonItem key={todo.id}>
                    <IonLabel>{todo.text}</IonLabel>
                    <div className="ion-text-end">
                      <IonButton fill="clear" onClick={() => editTodo(todo.id, prompt("Edit task:", todo.text))}>
                        <IonIcon icon={createOutline} />
                      </IonButton>
                      <IonButton fill="clear" onClick={() => deleteTodo(todo.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </div>
                    <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => toggleTodo(todo.id)} />
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};


export default TodoList;

export default TodoList;

