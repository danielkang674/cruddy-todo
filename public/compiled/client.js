'use strict';

$(function () {

  // View ////////////////////////////////////////////////////////////////////////

  var template = _.template('\n    <li data-id="<%=id%>" class="todo">\n      <span><%=text%></span>\n      <button data-action="edit">edit</button>\n      <button data-action="done">&#x2714;</button>\n    </li>\n  ');

  var renderTodo = function renderTodo(todo) {
    return template(todo);
  };

  var addTodo = function addTodo(todo) {
    $('#todos').append(renderTodo(todo));
  };

  var changeTodo = function changeTodo(id, todo) {
    $('#todos [data-id=' + id + ']').replaceWith(renderTodo(todo));
  };

  var removeTodo = function removeTodo(id) {
    $('#todos [data-id=' + id + ']').remove();
  };

  var addAllTodos = function addAllTodos(todos) {
    _.each(todos, function (todo) {
      addTodo(todo);
    });
  };

  // Controller //////////////////////////////////////////////////////////////////

  $('#form button').click(function (event) {
    var text = $('#form input').val().trim();
    if (text) {
      Todo.create(text, addTodo);
    }
    $('#form input').val('');
  });

  $('#todos').delegate('button', 'click', function (event) {
    var id = $(event.target.parentNode).data('id');
    if ($(event.target).data('action') === 'edit') {
      Todo.readOne(id, function (todo) {
        var updatedText = prompt('Change to?', todo.text);
        if (updatedText !== null && updatedText !== todo.text) {
          Todo.update(id, updatedText, changeTodo.bind(null, id));
        }
      });
    } else {
      Todo.delete(id, removeTodo.bind(null, id));
    }
  });

  // Initialization //////////////////////////////////////////////////////////////

  console.log('CRUDdy Todo client is running the browser');
  Todo.readAll(addAllTodos);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC5qcyJdLCJuYW1lcyI6WyIkIiwidGVtcGxhdGUiLCJfIiwicmVuZGVyVG9kbyIsInRvZG8iLCJhZGRUb2RvIiwiYXBwZW5kIiwiY2hhbmdlVG9kbyIsImlkIiwicmVwbGFjZVdpdGgiLCJyZW1vdmVUb2RvIiwicmVtb3ZlIiwiYWRkQWxsVG9kb3MiLCJ0b2RvcyIsImVhY2giLCJjbGljayIsImV2ZW50IiwidGV4dCIsInZhbCIsInRyaW0iLCJUb2RvIiwiY3JlYXRlIiwiZGVsZWdhdGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZGF0YSIsInJlYWRPbmUiLCJ1cGRhdGVkVGV4dCIsInByb21wdCIsInVwZGF0ZSIsImJpbmQiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwicmVhZEFsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRSxZQUFNOztBQUVOOztBQUVBLE1BQUlDLFdBQVdDLEVBQUVELFFBQUYsOExBQWY7O0FBUUEsTUFBSUUsYUFBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUN6QixXQUFPSCxTQUFTRyxJQUFULENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlDLFVBQVUsU0FBVkEsT0FBVSxDQUFDRCxJQUFELEVBQVU7QUFDdEJKLE1BQUUsUUFBRixFQUFZTSxNQUFaLENBQW1CSCxXQUFXQyxJQUFYLENBQW5CO0FBQ0QsR0FGRDs7QUFJQSxNQUFJRyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRCxFQUFLSixJQUFMLEVBQWM7QUFDN0JKLDJCQUFxQlEsRUFBckIsUUFBNEJDLFdBQTVCLENBQXdDTixXQUFXQyxJQUFYLENBQXhDO0FBQ0QsR0FGRDs7QUFJQSxNQUFJTSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0YsRUFBRCxFQUFRO0FBQ3ZCUiwyQkFBcUJRLEVBQXJCLFFBQTRCRyxNQUE1QjtBQUNELEdBRkQ7O0FBSUEsTUFBSUMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQlgsTUFBRVksSUFBRixDQUFPRCxLQUFQLEVBQWMsVUFBQ1QsSUFBRCxFQUFVO0FBQ3RCQyxjQUFRRCxJQUFSO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUE7O0FBRUFKLElBQUUsY0FBRixFQUFrQmUsS0FBbEIsQ0FBeUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQUlDLE9BQU9qQixFQUFFLGFBQUYsRUFBaUJrQixHQUFqQixHQUF1QkMsSUFBdkIsRUFBWDtBQUNBLFFBQUlGLElBQUosRUFBVTtBQUNSRyxXQUFLQyxNQUFMLENBQVlKLElBQVosRUFBa0JaLE9BQWxCO0FBQ0Q7QUFDREwsTUFBRSxhQUFGLEVBQWlCa0IsR0FBakIsQ0FBcUIsRUFBckI7QUFDRCxHQU5EOztBQVFBbEIsSUFBRSxRQUFGLEVBQVlzQixRQUFaLENBQXFCLFFBQXJCLEVBQStCLE9BQS9CLEVBQXdDLFVBQUNOLEtBQUQsRUFBVztBQUNqRCxRQUFJUixLQUFLUixFQUFFZ0IsTUFBTU8sTUFBTixDQUFhQyxVQUFmLEVBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUFUO0FBQ0EsUUFBSXpCLEVBQUVnQixNQUFNTyxNQUFSLEVBQWdCRSxJQUFoQixDQUFxQixRQUFyQixNQUFtQyxNQUF2QyxFQUErQztBQUM3Q0wsV0FBS00sT0FBTCxDQUFhbEIsRUFBYixFQUFpQixVQUFDSixJQUFELEVBQVU7QUFDekIsWUFBSXVCLGNBQWNDLE9BQU8sWUFBUCxFQUFxQnhCLEtBQUthLElBQTFCLENBQWxCO0FBQ0EsWUFBSVUsZ0JBQWdCLElBQWhCLElBQXdCQSxnQkFBZ0J2QixLQUFLYSxJQUFqRCxFQUF1RDtBQUNyREcsZUFBS1MsTUFBTCxDQUFZckIsRUFBWixFQUFnQm1CLFdBQWhCLEVBQTZCcEIsV0FBV3VCLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0J0QixFQUF0QixDQUE3QjtBQUNEO0FBQ0YsT0FMRDtBQU1ELEtBUEQsTUFPTztBQUNMWSxXQUFLVyxNQUFMLENBQVl2QixFQUFaLEVBQWdCRSxXQUFXb0IsSUFBWCxDQUFnQixJQUFoQixFQUFzQnRCLEVBQXRCLENBQWhCO0FBQ0Q7QUFDRixHQVpEOztBQWNBOztBQUVBd0IsVUFBUUMsR0FBUixDQUFZLDJDQUFaO0FBQ0FiLE9BQUtjLE9BQUwsQ0FBYXRCLFdBQWI7QUFFRCxDQS9ERCIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcblxuICAvLyBWaWV3IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHZhciB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoYFxuICAgIDxsaSBkYXRhLWlkPVwiPCU9aWQlPlwiIGNsYXNzPVwidG9kb1wiPlxuICAgICAgPHNwYW4+PCU9dGV4dCU+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBkYXRhLWFjdGlvbj1cImVkaXRcIj5lZGl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGRhdGEtYWN0aW9uPVwiZG9uZVwiPiYjeDI3MTQ7PC9idXR0b24+XG4gICAgPC9saT5cbiAgYCk7XG5cbiAgdmFyIHJlbmRlclRvZG8gPSAodG9kbykgPT4ge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh0b2RvKTtcbiAgfTtcblxuICB2YXIgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgJCgnI3RvZG9zJykuYXBwZW5kKHJlbmRlclRvZG8odG9kbykpO1xuICB9O1xuXG4gIHZhciBjaGFuZ2VUb2RvID0gKGlkLCB0b2RvKSA9PiB7XG4gICAgJChgI3RvZG9zIFtkYXRhLWlkPSR7aWR9XWApLnJlcGxhY2VXaXRoKHJlbmRlclRvZG8odG9kbykpO1xuICB9O1xuXG4gIHZhciByZW1vdmVUb2RvID0gKGlkKSA9PiB7XG4gICAgJChgI3RvZG9zIFtkYXRhLWlkPSR7aWR9XWApLnJlbW92ZSgpO1xuICB9O1xuXG4gIHZhciBhZGRBbGxUb2RvcyA9ICh0b2RvcykgPT4ge1xuICAgIF8uZWFjaCh0b2RvcywgKHRvZG8pID0+IHtcbiAgICAgIGFkZFRvZG8odG9kbyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udHJvbGxlciAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAkKCcjZm9ybSBidXR0b24nKS5jbGljayggKGV2ZW50KSA9PiB7XG4gICAgdmFyIHRleHQgPSAkKCcjZm9ybSBpbnB1dCcpLnZhbCgpLnRyaW0oKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgVG9kby5jcmVhdGUodGV4dCwgYWRkVG9kbyk7XG4gICAgfVxuICAgICQoJyNmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgfSk7XG5cbiAgJCgnI3RvZG9zJykuZGVsZWdhdGUoJ2J1dHRvbicsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHZhciBpZCA9ICQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpLmRhdGEoJ2lkJyk7XG4gICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5kYXRhKCdhY3Rpb24nKSA9PT0gJ2VkaXQnKSB7XG4gICAgICBUb2RvLnJlYWRPbmUoaWQsICh0b2RvKSA9PiB7XG4gICAgICAgIHZhciB1cGRhdGVkVGV4dCA9IHByb21wdCgnQ2hhbmdlIHRvPycsIHRvZG8udGV4dCk7XG4gICAgICAgIGlmICh1cGRhdGVkVGV4dCAhPT0gbnVsbCAmJiB1cGRhdGVkVGV4dCAhPT0gdG9kby50ZXh0KSB7XG4gICAgICAgICAgVG9kby51cGRhdGUoaWQsIHVwZGF0ZWRUZXh0LCBjaGFuZ2VUb2RvLmJpbmQobnVsbCwgaWQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvZG8uZGVsZXRlKGlkLCByZW1vdmVUb2RvLmJpbmQobnVsbCwgaWQpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluaXRpYWxpemF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc29sZS5sb2coJ0NSVURkeSBUb2RvIGNsaWVudCBpcyBydW5uaW5nIHRoZSBicm93c2VyJyk7XG4gIFRvZG8ucmVhZEFsbChhZGRBbGxUb2Rvcyk7XG5cbn0pO1xuIl19