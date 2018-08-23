'use strict';

// Todo Model //////////////////////////////////////////////////////////////////

window.Todo = {

  url: '/todo',

  // Create (Crud) -- collection
  create: function create(text, callback) {
    return $.ajax({
      url: this.url,
      type: 'POST',
      dataType: 'json',
      data: { todoText: text },
      success: callback
    });
  },

  // Read all (cRud) -- collection
  readAll: function readAll(callback) {
    return $.ajax({
      url: this.url,
      type: 'GET',
      dataType: 'json',
      success: callback
    });
  },

  // Read one (cRud) -- member
  readOne: function readOne(id, callback) {
    return $.ajax({
      url: this.url + '/' + id,
      type: 'GET',
      dataType: 'json',
      success: callback
    });
  },

  // Update (crUd) -- member
  update: function update(id, text, callback) {
    return $.ajax({
      url: this.url + '/' + id,
      type: 'PUT',
      dataType: 'json',
      data: { todoText: text },
      success: callback
    });
  },

  // Delete (cruD) -- member
  delete: function _delete(id, callback) {
    return $.ajax({
      url: this.url + '/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: callback
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RvZG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiVG9kbyIsInVybCIsImNyZWF0ZSIsInRleHQiLCJjYWxsYmFjayIsIiQiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsInRvZG9UZXh0Iiwic3VjY2VzcyIsInJlYWRBbGwiLCJyZWFkT25lIiwiaWQiLCJ1cGRhdGUiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUFBLE9BQU9DLElBQVAsR0FBYzs7QUFFWkMsT0FBSyxPQUZPOztBQUlaO0FBQ0FDLFVBQVEsZ0JBQVNDLElBQVQsRUFBZUMsUUFBZixFQUF5QjtBQUMvQixXQUFPQyxFQUFFQyxJQUFGLENBQU87QUFDWkwsV0FBSyxLQUFLQSxHQURFO0FBRVpNLFlBQU0sTUFGTTtBQUdaQyxnQkFBVSxNQUhFO0FBSVpDLFlBQU0sRUFBQ0MsVUFBVVAsSUFBWCxFQUpNO0FBS1pRLGVBQVNQO0FBTEcsS0FBUCxDQUFQO0FBT0QsR0FiVzs7QUFlWjtBQUNBUSxXQUFTLGlCQUFTUixRQUFULEVBQW1CO0FBQzFCLFdBQU9DLEVBQUVDLElBQUYsQ0FBTztBQUNaTCxXQUFLLEtBQUtBLEdBREU7QUFFWk0sWUFBTSxLQUZNO0FBR1pDLGdCQUFVLE1BSEU7QUFJWkcsZUFBU1A7QUFKRyxLQUFQLENBQVA7QUFNRCxHQXZCVzs7QUF5Qlo7QUFDQVMsV0FBUyxpQkFBU0MsRUFBVCxFQUFhVixRQUFiLEVBQXVCO0FBQzlCLFdBQU9DLEVBQUVDLElBQUYsQ0FBTztBQUNaTCxXQUFRLEtBQUtBLEdBQWIsU0FBb0JhLEVBRFI7QUFFWlAsWUFBTSxLQUZNO0FBR1pDLGdCQUFVLE1BSEU7QUFJWkcsZUFBU1A7QUFKRyxLQUFQLENBQVA7QUFNRCxHQWpDVzs7QUFtQ1o7QUFDQVcsVUFBUSxnQkFBU0QsRUFBVCxFQUFhWCxJQUFiLEVBQW1CQyxRQUFuQixFQUE2QjtBQUNuQyxXQUFPQyxFQUFFQyxJQUFGLENBQU87QUFDWkwsV0FBUSxLQUFLQSxHQUFiLFNBQW9CYSxFQURSO0FBRVpQLFlBQU0sS0FGTTtBQUdaQyxnQkFBVSxNQUhFO0FBSVpDLFlBQU0sRUFBQ0MsVUFBVVAsSUFBWCxFQUpNO0FBS1pRLGVBQVNQO0FBTEcsS0FBUCxDQUFQO0FBT0QsR0E1Q1c7O0FBOENaO0FBQ0FZLFVBQVEsaUJBQVNGLEVBQVQsRUFBYVYsUUFBYixFQUF1QjtBQUM3QixXQUFPQyxFQUFFQyxJQUFGLENBQU87QUFDWkwsV0FBUSxLQUFLQSxHQUFiLFNBQW9CYSxFQURSO0FBRVpQLFlBQU0sUUFGTTtBQUdaQyxnQkFBVSxNQUhFO0FBSVpHLGVBQVNQO0FBSkcsS0FBUCxDQUFQO0FBTUQ7QUF0RFcsQ0FBZCIsImZpbGUiOiJ0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBUb2RvIE1vZGVsIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG53aW5kb3cuVG9kbyA9IHtcblxuICB1cmw6ICcvdG9kbycsXG5cbiAgLy8gQ3JlYXRlIChDcnVkKSAtLSBjb2xsZWN0aW9uXG4gIGNyZWF0ZTogZnVuY3Rpb24odGV4dCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge3RvZG9UZXh0OiB0ZXh0fSxcbiAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gUmVhZCBhbGwgKGNSdWQpIC0tIGNvbGxlY3Rpb25cbiAgcmVhZEFsbDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBjYWxsYmFja1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFJlYWQgb25lIChjUnVkKSAtLSBtZW1iZXJcbiAgcmVhZE9uZTogZnVuY3Rpb24oaWQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICB1cmw6IGAke3RoaXMudXJsfS8ke2lkfWAsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBjYWxsYmFja1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFVwZGF0ZSAoY3JVZCkgLS0gbWVtYmVyXG4gIHVwZGF0ZTogZnVuY3Rpb24oaWQsIHRleHQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICB1cmw6IGAke3RoaXMudXJsfS8ke2lkfWAsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7dG9kb1RleHQ6IHRleHR9LFxuICAgICAgc3VjY2VzczogY2FsbGJhY2tcbiAgICB9KTtcbiAgfSxcblxuICAvLyBEZWxldGUgKGNydUQpIC0tIG1lbWJlclxuICBkZWxldGU6IGZ1bmN0aW9uKGlkLCBjYWxsYmFjaykge1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgdXJsOiBgJHt0aGlzLnVybH0vJHtpZH1gLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogY2FsbGJhY2tcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==