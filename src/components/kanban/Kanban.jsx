import {DragDropContext, Draggable,Droppable} from 'react-beautiful-dnd';
import mockData from '../../mockData';
import { Card } from '../card/card';
import { useState } from 'react';
import "./kanban.scss"


function Kanban() {
  const [data, setData] = useState(mockData);

   const handleOnDragEnd = (result)=>{
    if(!result.destination) return;
    const {source, destination} = result;

    if (source.droppableId !== destination.droppableId){
      const sourceColIndex = data.findIndex((items) => items.id === source.droppableId);
      const destinationColIndex = data.findIndex((items) => items.id === destination.droppableId);

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask; 
      data[destinationColIndex].tasks = destinationTask;

      setData(data);

    }
  };
  return (
 
  <DragDropContext onDragEnd ={handleOnDragEnd}>
    <div className='kanban'>
      {data.map((section) =>(
        <Droppable key={section.id} droppableId = {section.id}>
        {
          (provided) => (
            <div {...provided.droppableProps} className="kanban_section" ref={provided.innerRef}>

              <div className="kanban_section_title">{section.title}</div>
              <div className="kanban_section_content">
                   {
                    section.tasks.map((task, index) =>(
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={
                            {...provided.draggableProps.style, opacity:snapshot.isDragging?"0.5":"1"}
                          }>
                            <Card>{task.title}</Card>
                          </div>
                        )}
                      </Draggable> 
                    ))
                   }
              </div>
            </div>
           
          )
        }
        </Droppable>
      )) }
    </div>
  </DragDropContext>
  );
}

export default Kanban;