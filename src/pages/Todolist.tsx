import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonIcon } from '@ionic/react';
import { trashOutline, createOutline, add } from 'ionicons/icons'; // Import the add icon

import './Todolist.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

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
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>To Do List</IonTitle>
          </IonToolbar>
      </IonHeader>
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
                  width: '85%',
                  marginLeft: '10px',
                  marginRight: '0px',
                  marginTop: '20px',
                  borderBottom: '1px solid gray', // Add white line below the input field
                  backgroundColor: 'rgb(26, 26, 26)',    
                  // borderTopLeftRadius: '10px',
                  // borderTopRightRadius: '10px',
                  paddingLeft: '20px'
                }}
              />


              <IonCol>
                <IonIcon icon={add} onClick={addTodo} id="icon_plus" style={{ backgroundColor: 'var(--ion-color-primary)' }} />
              </IonCol>
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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
