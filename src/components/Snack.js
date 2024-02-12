function Snack() {
  return (
    <div>
      <label for="snack">Snack</label>
      <select id="snack" name="snack">
        <option value="snack" selected>
          Snack
        </option>
        <option value="Fruits">Fruits</option>
        <option value="nuts">Nuts</option>
      </select>
    </div>
  );
}

export default Snack;
