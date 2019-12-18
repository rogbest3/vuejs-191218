<template>
	<div id="todolistapp">
		<Nav/>
		<div id="header" class="header">
			<h2>Todo List App</h2>
			<input class="input" type="text" id="task" v-model="task" placeholder="입력 후 엔터!">
			<span class="addbutton" @click="addTodo">추 가</span>
		</div>
        <ul id="todolist">            <!-- v-bind : data 값 가져오기, 단방향 -->
			<!-- <li v-for="todo of todos" :key="todo.id" :class="todo.clazz"> -->
            <li v-for="(todo, i) of todos" :key="todo.id" :class="todo.clazz" @click="doneToggle(todo)">    
                <span>task{{i + 1}} - {{todo.todo}}</span>
                <span v-if="todo.clazz"> (완료)</span>
                <span class="close" @click="deleteTodo(i)">&#x00D7;</span>
            </li>
            
            <!-- <ul v-for="todo of todos" :key="todo.id">
                <li v-if="todo.done" class="checked">
                    <span>task{{todo.id}} - {{todo.todo}}</span>
                    <span> (완료)</span>
                    <span class="close">&#x00D7;</span>
                </li>
                <li v-else>
                    <span>task{{todo.id}} - {{todo.todo}}</span>
                    <span class="close">&#x00D7;</span>
                </li>
			</ul> -->

		</ul>
		<Footer/>
	</div>	
</template>
<script>
import Nav from "@/components/cmm/Nav.vue"
import Footer from "@/components/cmm/Footer.vue"
export default {
	name : 'todo2',
	components : {
		Nav, Footer
	},
	data(){
		return{
            todos : [{ id : 1, todo : "영화보기", done : false, clazz : '' },
                     { id : 2, todo : "주말산책", done : true, clazz : 'checked'  },
                     { id : 3, todo : "ES6 학습", done : false, clazz : '' },
                     { id : 4, todo : "잠실 야구장", done : false, clazz : '' }],
            task : ''
		}
	},
	methods : {
        addTodo(){
            this.todos.push({ id : this.todos.length + 1, todo : this.task, done : false, clazz : '' })
        },
        doneToggle(json){
           /*  const index = this.todos.findIndex(function(item){
                return item.id === id
            }) */
           /*  const target = this.todos[todo.id-1]
            target.done = !target.done
            target.clazz = ( target.done ) ? 'checked' : '' */
            json.clazz = (json.clazz == '') ? 'checked' : ''
            
        },
        deleteTodo(i){
            /* todo로 받을 때
            const idx = this.todos.findIndex(function(item){
                return item.id === json.id
            })
            if(idx > -1)
                this.todos.splice(idx, 1) */
            //
            this.todos.splice(i, 1)
        }
	}
}
</script>
<style scoped>
* {  box-sizing: border-box;  }
    ul {  margin: 0; padding: 0; }
    ul li {
        cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
        background: #eee; font-size: 14px;  transition: 0.2s;
        -webkit-user-select: none; -moz-user-select: none;
        -ms-user-select: none; user-select: none;  
    }
    ul li:hover {  background: #ddd;  }
    ul li.checked {
        background: #BBB;  color: #fff; text-decoration: line-through;
    }
    ul li.checked::before {
        content: ''; position: absolute; border-color: #fff;
        border-style: solid; border-width: 0px 1px 1px 0px;
        top: 10px; left: 16px;  transform: rotate(45deg);
        height: 8px; width: 8px;
    }
    .close {
        position: absolute; right: 0; top: 0;
        padding: 12px 16px 12px 16px
    }
    .close:hover {
        background-color: #f44336;  color: white;
    }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
    .input {
        border: none; width: 75%; height:35px; padding: 10px;
        float: left; font-size: 16px;
    }
    .addbutton {
        padding: 10px; width: 25%; height:35px; background: #d9d9d9;
        color: #555; float: left; text-align: center;
        font-size: 13px; cursor: pointer; transition: 0.3s;
    }
    .addbutton:hover { background-color: #bbb; }
    .completed { text-decoration:none; }
</style>