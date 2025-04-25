
export const mathsQuestions = {
  {
  "module1_linalg": {
    "title": "Module 1: Matrices and Linear Equations",
    "questions": [
      {
        "question": "A rectangular array of symbols or numbers arranged in rows and columns is called a:",
        "options": {
          "a": "Determinant",
          "b": "Vector",
          "c": "Matrix",
          "d": "Scalar"
        },
        "answer": "c"
      },
      {
        "question": "Two matrices A = (a_ij) and B = (b_ij) are equal if and only if:",
        "options": {
          "a": "They have the same number of rows.",
          "b": "They have the same number of columns.",
          "c": "They have the same dimensions and a_ij = b_ij for all i and j.",
          "d": "Their determinants are equal."
        },
        "answer": "c"
      },
      {
        "question": "If A is an m x n matrix, what are the dimensions of its transpose A^T?",
        "options": {
          "a": "m x n",
          "b": "n x m",
          "c": "m x m",
          "d": "n x n"
        },
        "answer": "b"
      },
      {
        "question": "The sum of two matrices A and B is defined only if:",
        "options": {
          "a": "A is square and B is square.",
          "b": "They have the same number of rows.",
          "c": "They have the same number of columns.",
          "d": "They have the same dimensions."
        },
        "answer": "d"
      },
      {
        "question": "If A and B are m x n matrices, which property holds for matrix addition?",
        "options": {
          "a": "AB = BA",
          "b": "A + B = B + A",
          "c": "(A + B)^T = A^T + B",
          "d": "A - B = B - A"
        },
        "answer": "b"
      },
      {
        "question": "The product AB of two matrices A and B is defined if and only if:",
        "options": {
          "a": "The number of rows of A equals the number of rows of B.",
          "b": "The number of columns of A equals the number of columns of B.",
          "c": "The number of columns of A equals the number of rows of B.",
          "d": "The number of rows of A equals the number of columns of B."
        },
        "answer": "c"
      },
      {
        "question": "If A is an m x n matrix and B is an n x p matrix, what are the dimensions of the product AB?",
        "options": {
          "a": "m x n",
          "b": "n x p",
          "c": "m x p",
          "d": "n x n"
        },
        "answer": "c"
      },
      {
        "question": "Which of the following properties is generally NOT true for matrix multiplication (assuming the products are defined)?",
        "options": {
          "a": "(AB)C = A(BC)",
          "b": "A(B + C) = AB + AC",
          "c": "(A + B)C = AC + BC",
          "d": "AB = BA"
        },
        "answer": "d"
      },
      {
        "question": "The identity matrix I_n is a square matrix with:",
        "options": {
          "a": "All entries equal to 1.",
          "b": "All entries equal to 0.",
          "c": "Ones on the main diagonal and zeros elsewhere.",
          "d": "Zeros on the main diagonal and ones elsewhere."
        },
        "answer": "c"
      },
      {
        "question": "The transpose of a product (AB)^T is equal to:",
        "options": {
          "a": "A^T B^T",
          "b": "B^T A^T",
          "c": "(BA)^T",
          "d": "A B^T"
        },
        "answer": "b"
      },
      {
        "question": "The trace of a square matrix A, denoted tr(A), is:",
        "options": {
          "a": "The product of the diagonal entries.",
          "b": "The sum of the diagonal entries.",
          "c": "The determinant of the matrix.",
          "d": "The sum of all entries."
        },
        "answer": "b"
      },
      {
        "question": "Which property is true for the trace of square matrices A and B of the same size?",
        "options": {
          "a": "tr(AB) = tr(A)tr(B)",
          "b": "tr(A + B) = tr(A) + tr(B)",
          "c": "tr(A^T) = -tr(A)",
          "d": "tr(cA) = c + tr(A) for scalar c"
        },
        "answer": "b"
      },
      {
        "question": "A system of linear equations Ax = b is called homogeneous if:",
        "options": {
          "a": "A is the zero matrix.",
          "b": "x is the zero vector.",
          "c": "b is the zero vector.",
          "d": "A is the identity matrix."
        },
        "answer": "c"
      },
      {
        "question": "A system of linear equations is inconsistent if:",
        "options": {
          "a": "It has exactly one solution.",
          "b": "It has infinitely many solutions.",
          "c": "It has no solutions.",
          "d": "The number of equations equals the number of unknowns."
        },
        "answer": "c"
      },
      {
        "question": "Which of the following is NOT an elementary row operation?",
        "options": {
          "a": "Interchange two rows.",
          "b": "Multiply a row by a non-zero scalar.",
          "c": "Add a multiple of one row to another row.",
          "d": "Replace a row with the zero vector."
        },
        "answer": "d"
      },
      {
        "question": "The process of using elementary row operations to transform a matrix into echelon form is called:",
        "options": {
          "a": "Matrix inversion",
          "b": "Gaussian elimination",
          "c": "Calculating the determinant",
          "d": "Finding the trace"
        },
        "answer": "b"
      },
      {
        "question": "In an echelon form matrix, the first non-zero entry in each non-zero row is called a:",
        "options": {
          "a": "Pivot",
          "b": "Free variable",
          "c": "Leading entry",
          "d": "Diagonal element"
        },
        "answer": "c"
      },
      {
        "question": "The method of solving a system in echelon form by solving for variables starting from the last equation is called:",
        "options": {
          "a": "Forward substitution",
          "b": "Gaussian elimination",
          "c": "Back substitution",
          "d": "Cramer's rule"
        },
        "answer": "c"
      },
      {
        "question": "A square matrix A is invertible (or non-singular) if there exists a matrix A⁻¹ such that:",
        "options": {
          "a": "A + A⁻¹ = 0",
          "b": "A - A⁻¹ = I",
          "c": "AA⁻¹ = A⁻¹A = I",
          "d": "AA⁻¹ = 0"
        },
        "answer": "c"
      },
      {
        "question": "If A and B are invertible matrices of the same size, then (AB)⁻¹ is:",
        "options": {
          "a": "A⁻¹ B⁻¹",
          "b": "B⁻¹ A⁻¹",
          "c": "(BA)⁻¹",
          "d": "A B⁻¹"
        },
        "answer": "b"
      },
      {
        "question": "The determinant of a 2x2 matrix [[a, b], [c, d]] is:",
        "options": {
          "a": "ac - bd",
          "b": "ad + bc",
          "c": "ab - cd",
          "d": "ad - bc"
        },
        "answer": "d"
      },
      {
        "question": "If a matrix has a row of zeros, its determinant is:",
        "options": {
          "a": "1",
          "b": "0",
          "c": "Undefined",
          "d": "Equal to the trace"
        },
        "answer": "b"
      },
      {
        "question": "If matrix B is obtained from matrix A by interchanging two rows, then det(B) = ?",
        "options": {
          "a": "det(A)",
          "b": "-det(A)",
          "c": "0",
          "d": "2det(A)"
        },
        "answer": "b"
      },
      {
        "question": "If matrix B is obtained from matrix A by multiplying a row by a scalar λ, then det(B) = ?",
        "options": {
          "a": "det(A)",
          "b": "λ det(A)",
          "c": "(1/λ) det(A)",
          "d": "det(A) + λ"
        },
        "answer": "b"
      },
      {
        "question": "A square matrix A is invertible if and only if:",
        "options": {
          "a": "det(A) = 0",
          "b": "det(A) ≠ 0",
          "c": "tr(A) = 0",
          "d": "A is symmetric"
        },
        "answer": "b"
      },
      {
        "question": "The determinant of a product of square matrices det(AB) is:",
        "options": {
          "a": "det(A) + det(B)",
          "b": "det(A) - det(B)",
          "c": "det(A) det(B)",
          "d": "det(B) det(A)"
        },
        "answer": "c"
      },
      {
        "question": "The determinant of the transpose of a matrix det(A^T) is:",
        "options": {
          "a": "det(A)",
          "b": "-det(A)",
          "c": "1/det(A)",
          "d": "0"
        },
        "answer": "a"
      },
      {
        "question": "A matrix A is symmetric if:",
        "options": {
          "a": "A = -A",
          "b": "A = A⁻¹",
          "c": "A = A^T",
          "d": "A^T = -A"
        },
        "answer": "c"
      },
      {
        "question": "A matrix A is skew-symmetric if:",
        "options": {
          "a": "A = A^T",
          "b": "A = A⁻¹",
          "c": "A = -A",
          "d": "A^T = -A"
        },
        "answer": "d"
      },
      {
        "question": "A square matrix A is orthogonal if:",
        "options": {
          "a": "A = A^T",
          "b": "A^T = A⁻¹",
          "c": "det(A) = 0",
          "d": "A = I"
        },
        "answer": "b"
      },
      {
        "question": "Cramer's rule is used to:",
        "options": {
          "a": "Find the inverse of a matrix.",
          "b": "Calculate the determinant.",
          "c": "Solve systems of linear equations Ax=b when det(A) ≠ 0.",
          "d": "Perform LU decomposition."
        },
        "answer": "c"
      },
      {
        "question": "LU decomposition expresses a square matrix A as:",
        "options": {
          "a": "A = L + U",
          "b": "A = L - U",
          "c": "A = LU",
          "d": "A = UL"
        },
        "answer": "c"
      },
      {
        "question": "In LU decomposition, L is typically a ____ matrix and U is a ____ matrix.",
        "options": {
          "a": "Lower triangular, Upper triangular",
          "b": "Upper triangular, Lower triangular",
          "c": "Diagonal, Symmetric",
          "d": "Symmetric, Diagonal"
        },
        "answer": "a"
      },
       {
        "question": "Calculate the determinant of [[1, 2], [3, 4]].",
        "options": {
          "a": "2",
          "b": "-2",
          "c": "10",
          "d": "-10"
        },
        "answer": "b"
      },
      {
        "question": "Calculate the product [[1, 0], [2, 1]] * [[3], [4]].",
        "options": {
          "a": "[[3], [10]]",
          "b": "[[3], [8]]",
          "c": "[[7], [4]]",
          "d": "[[3, 0], [8, 4]]"
        },
        "answer": "a"
      },
      {
        "question": "Find the trace of [[1, -1, 6], [4, 1, -2], [3, 2, 0]].",
        "options": {
          "a": "2",
          "b": "3",
          "c": "14",
          "d": "0"
        },
        "answer": "a"
      },
      {
        "question": "If A = [[1, 2], [2, 3]], what is A + A^T?",
        "options": {
          "a": "[[2, 4], [4, 6]]",
          "b": "[[1, 4], [4, 3]]",
          "c": "[[2, 4], [4, 3]]",
          "d": "[[1, 2], [2, 3]]"
        },
        "answer": "a"
      },
      {
        "question": "A system with more unknowns than equations (m < n) cannot have:",
        "options": {
          "a": "No solution",
          "b": "Infinitely many solutions",
          "c": "Exactly one unique solution",
          "d": "A trivial solution"
        },
        "answer": "c"
      },
      {
        "question": "Find the inverse of [[1, 2], [0, 1]].",
        "options": {
          "a": "[[1, -2], [0, 1]]",
          "b": "[[1, 0], [-2, 1]]",
          "c": "[[1, 2], [0, 1]]",
          "d": "[[-1, 2], [0, -1]]"
        },
        "answer": "a"
      },
      {
        "question": "What is the determinant of [[1, 0, 2], [0, 3, 0], [4, 0, 5]]?",
        "options": {
          "a": "-3",
          "b": "3",
          "c": "-9",
          "d": "9"
        },
        "answer": "c"
      }
    ]
  },
  "module2_linalg": {
    "title": "Module 2: Vector Spaces and Linear Maps",
    "questions": [
      {
        "question": "Which of the following is NOT a required property for a set V to be a vector space over a field F?",
        "options": {
          "a": "Closure under vector addition.",
          "b": "Existence of a multiplicative identity for vectors.",
          "c": "Existence of an additive identity (zero vector).",
          "d": "Associativity of scalar multiplication."
        },
        "answer": "b"
      },
      {
        "question": "The set of all polynomials of degree exactly 2, P_2(x), with standard addition and scalar multiplication is a vector space.",
        "options": {
          "a": "True",
          "b": "False",
          "c": "Only if the coefficients are real",
          "d": "Only if the coefficients are positive"
        },
        "answer": "b"
      },
      {
        "question": "A subset W of a vector space V is a subspace if:",
        "options": {
          "a": "W contains the zero vector.",
          "b": "W is closed under vector addition.",
          "c": "W is closed under scalar multiplication.",
          "d": "All of the above (W is non-empty and closed under addition and scalar multiplication)."
        },
        "answer": "d"
      },
      {
        "question": "A linear combination of vectors v_1, v_2, ..., v_k is an expression of the form:",
        "options": {
          "a": "v_1 + v_2 + ... + v_k",
          "b": "c(v_1 + v_2 + ... + v_k)",
          "c": "c_1 v_1 + c_2 v_2 + ... + c_k v_k",
          "d": "v_1 v_2 ... v_k"
        },
        "answer": "c"
      },
      {
        "question": "The span of a set of vectors S = {v_1, ..., v_k} is:",
        "options": {
          "a": "The set S itself.",
          "b": "The set of all linear combinations of vectors in S.",
          "c": "The largest vector in S.",
          "d": "The zero vector."
        },
        "answer": "b"
      },
      {
        "question": "A set of vectors {v_1, ..., v_k} is linearly independent if the equation c_1 v_1 + ... + c_k v_k = 0 implies:",
        "options": {
          "a": "At least one c_i is non-zero.",
          "b": "All c_i are equal to 1.",
          "c": "All c_i are equal to 0.",
          "d": "The vectors form a basis."
        },
        "answer": "c"
      },
      {
        "question": "A basis for a vector space V is a set of vectors that is:",
        "options": {
          "a": "Linearly dependent and spans V.",
          "b": "Linearly independent but does not span V.",
          "c": "Linearly dependent but does not span V.",
          "d": "Linearly independent and spans V."
        },
        "answer": "d"
      },
      {
        "question": "The dimension of a vector space V, dim(V), is:",
        "options": {
          "a": "The number of vectors in V.",
          "b": "The number of vectors in any basis for V.",
          "c": "The number of subspaces of V.",
          "d": "Infinite for most common spaces."
        },
        "answer": "b"
      },
      {
        "question": "What is the dimension of R^3 (the space of 3-component real vectors)?",
        "options": {
          "a": "1",
          "b": "2",
          "c": "3",
          "d": "Infinite"
        },
        "answer": "c"
      },
      {
        "question": "A function T: V -> W between vector spaces V and W is a linear map (or transformation) if for all u, v in V and scalar c:",
        "options": {
          "a": "T(u + v) = T(u) + T(v) and T(cu) = cT(u)",
          "b": "T(uv) = T(u)T(v)",
          "c": "T(u + v) = T(u)T(v) and T(cu) = c + T(u)",
          "d": "T(c + u) = cT(u)"
        },
        "answer": "a"
      },
      {
        "question": "The kernel (or null space) of a linear map T: V -> W is the set:",
        "options": {
          "a": "{w in W | T(v) = w for some v in V}",
          "b": "{v in V | T(v) = 0_W}",
          "c": "{v in V | T(v) = v}",
          "d": "{w in W | T(0_V) = w}"
        },
        "answer": "b"
      },
      {
        "question": "The image (or range) of a linear map T: V -> W is the set:",
        "options": {
          "a": "{w in W | T(v) = w for some v in V}",
          "b": "{v in V | T(v) = 0_W}",
          "c": "{v in V | T(v) = v}",
          "d": "{w in W | T(0_V) = w}"
        },
        "answer": "a"
      },
      {
        "question": "The Rank-Nullity Theorem states that for a linear map T: V -> W where V is finite-dimensional:",
        "options": {
          "a": "rank(T) + nullity(T) = dim(W)",
          "b": "rank(T) - nullity(T) = dim(V)",
          "c": "rank(T) * nullity(T) = dim(V)",
          "d": "rank(T) + nullity(T) = dim(V)"
        },
        "answer": "d"
      },
      {
        "question": "An isomorphism between vector spaces V and W is a linear map that is:",
        "options": {
          "a": "Only injective (one-to-one)",
          "b": "Only surjective (onto)",
          "c": "Bijective (one-to-one and onto)",
          "d": "Maps V to the zero vector in W"
        },
        "answer": "c"
      },
      {
        "question": "If two finite-dimensional vector spaces V and W are isomorphic, then:",
        "options": {
          "a": "dim(V) < dim(W)",
          "b": "dim(V) > dim(W)",
          "c": "dim(V) = dim(W)",
          "d": "dim(V) = 0 or dim(W) = 0"
        },
        "answer": "c"
      },
      {
        "question": "The standard basis for R^2 is:",
        "options": {
          "a": "{[1, 0], [0, 1]}",
          "b": "{[1, 1]}",
          "c": "{[1, 0], [1, 1]}",
          "d": "{[1, 1], [0, 0]}"
        },
        "answer": "a"
      },
      {
        "question": "Is the set {[1, 1], [2, 2]} linearly independent in R^2?",
        "options": {
          "a": "Yes",
          "b": "No",
          "c": "Depends on the field",
          "d": "Cannot be determined"
        },
        "answer": "b"
      },
      {
        "question": "Is T(x, y) = (x+1, y) a linear map from R^2 to R^2?",
        "options": {
          "a": "Yes",
          "b": "No",
          "c": "Only if x=0",
          "d": "Only if y=0"
        },
        "answer": "b"
      },
      {
        "question": "What is the dimension of the vector space of all 2x2 matrices with real entries?",
        "options": {
          "a": "1",
          "b": "2",
          "c": "3",
          "d": "4"
        },
        "answer": "d"
      },
      {
        "question": "The kernel of the linear map T(x, y, z) = (x, y, 0) from R^3 to R^3 is:",
        "options": {
          "a": "The xy-plane",
          "b": "The yz-plane",
          "c": "The x-axis",
          "d": "The z-axis"
        },
        "answer": "d"
      }
    ]
  },
  "module3_calc": {
    "title": "Module 3: Parametric Equations - Basics & Calculus I",
    "questions": [
      {
        "question": "A curve defined by x = f(t) and y = g(t) over an interval of t-values is called a:",
        "options": {
          "a": "Cartesian Curve",
          "b": "Polar Curve",
          "c": "Parametric Curve",
          "d": "Implicit Curve"
        },
        "answer": "c"
      },
      {
        "question": "Find the Cartesian equation for the parametric curve x = 3t, y = 9t^2.",
        "options": {
          "a": "y = x^2",
          "b": "y = 3x^2",
          "c": "x = y^2",
          "d": "y = 9x"
        },
        "answer": "a"
      },
      {
        "question": "Find the Cartesian equation for the parametric curve x = cos(t), y = sin(t), 0 ≤ t ≤ 2π.",
        "options": {
          "a": "y = tan(x)",
          "b": "x^2 + y^2 = 1",
          "c": "y = x",
          "d": "x^2 - y^2 = 1"
        },
        "answer": "b"
      },
      {
        "question": "Find the Cartesian equation for x = t + 1/t, y = t - 1/t.",
        "options": {
          "a": "x^2 + y^2 = 4",
          "b": "x^2 - y^2 = 4",
          "c": "y^2 - x^2 = 4",
          "d": "x^2 - y^2 = 2"
        },
        "answer": "b"
      },
      {
        "question": "For a parametric curve x = f(t), y = g(t), the slope dy/dx is given by:",
        "options": {
          "a": "(dx/dt) / (dy/dt)",
          "b": "(dy/dt) / (dx/dt)",
          "c": "dy/dt",
          "d": "dx/dt"
        },
        "answer": "b"
      },
      {
        "question": "Find dy/dx for the curve x = t^2, y = t^3.",
        "options": {
          "a": "3t/2",
          "b": "2t/3t^2",
          "c": "3t^2 / 2t",
          "d": "t"
        },
        "answer": "c"
      },
      {
        "question": "Find the slope of the curve x = 2cos(t), y = 2sin(t) at t = π/4.",
        "options": {
          "a": "1",
          "b": "-1",
          "c": "0",
          "d": "Undefined"
        },
        "answer": "b"
      },
      {
        "question": "Find the slope of the curve x = sec(t), y = tan(t) at t = π/6.",
        "options": {
          "a": "2",
          "b": "1/2",
          "c": "sqrt(3)",
          "d": "2/sqrt(3)"
        },
        "answer": "a"
      },
      {
        "question": "Find the equation of the tangent line to the curve x = t^2+3, y = t^4 at t = -1.",
        "options": {
          "a": "y - 1 = 2(x - 4)",
          "b": "y - 1 = -2(x - 4)",
          "c": "y - 4 = 2(x - 1)",
          "d": "y + 1 = 2(x + 4)"
        },
        "answer": "a"
      },
      {
        "question": "For a parametric curve x = f(t), y = g(t), the second derivative d²y/dx² is given by:",
        "options": {
          "a": "(d/dt)(dy/dx)",
          "b": "(d²y/dt²) / (d²x/dt²)",
          "c": "(d/dt)(dy/dx) / (dx/dt)",
          "d": "(d/dt)(dy/dx) / (dy/dt)"
        },
        "answer": "c"
      },
      {
        "question": "Find d²y/dx² for the curve x = t - t^2, y = t - t^3.",
        "options": {
          "a": "(2 - 6t + 6t^2) / (1 - 2t)^2",
          "b": "(2 - 6t + 6t^2) / (1 - 2t)^3",
          "c": "(-6 + 12t) / (1 - 2t)",
          "d": "(-6t) / (-2)"
        },
        "answer": "b"
      },
      {
        "question": "Find d²y/dx² for the curve x = 2cos(t), y = 2sin(t) at t = π/4.",
        "options": {
          "a": "-sqrt(2)/2",
          "b": "sqrt(2)/2",
          "c": "-sqrt(2)",
          "d": "sqrt(2)"
        },
        "answer": "a"
      },
      {
        "question": "A curve has a horizontal tangent where:",
        "options": {
          "a": "dx/dt = 0",
          "b": "dy/dt = 0 and dx/dt ≠ 0",
          "c": "dy/dx = 1",
          "d": "dy/dt = 0 and dx/dt = 0"
        },
        "answer": "b"
      },
      {
        "question": "A curve has a vertical tangent where:",
        "options": {
          "a": "dy/dt = 0",
          "b": "dx/dt = 0 and dy/dt ≠ 0",
          "c": "dy/dx = 0",
          "d": "dy/dt = 0 and dx/dt = 0"
        },
        "answer": "b"
      },
      {
        "question": "The parametric equations x = a cos(t), y = a sin(t) represent a:",
        "options": {
          "a": "Line",
          "b": "Parabola",
          "c": "Circle",
          "d": "Hyperbola"
        },
        "answer": "c"
      },
      {
        "question": "The curve traced by a point on the circumference of a wheel rolling along a straight line is called a:",
        "options": {
          "a": "Cardioid",
          "b": "Lemniscate",
          "c": "Cycloid",
          "d": "Astroid"
        },
        "answer": "c"
      },
      {
        "question": "Find dy/dx for x = e^t, y = t^2 + 1.",
        "options": {
          "a": "2t / e^t",
          "b": "e^t / 2t",
          "c": "2t * e^t",
          "d": "t^2+1 / e^t"
        },
        "answer": "a"
      },
      {
        "question": "Find the slope of the tangent to x = sqrt(t), y = t at t=4.",
        "options": {
          "a": "1/4",
          "b": "4",
          "c": "1",
          "d": "2"
        },
        "answer": "b"
      },
       {
        "question": "The Cartesian equation for x = t^2, y = t^6 - 2t^4 is:",
        "options": {
          "a": "y = x^3 - 2x^2",
          "b": "y = x^6 - 2x^4",
          "c": "y^2 = x^3 - 2x^2",
          "d": "y = x^4 - 2x^2"
        },
        "answer": "a"
      },
      {
        "question": "Parametric equations provide information about the curve's path and also:",
        "options": {
          "a": "Its color",
          "b": "Its temperature",
          "c": "The direction of motion and speed",
          "d": "Its area only"
        },
        "answer": "c"
      }
    ]
  },
  "module4_calc": {
    "title": "Module 4: Parametric Equations - Calculus II",
    "questions": [
      {
        "question": "The formula for the arc length of a smooth parametric curve x = f(t), y = g(t) from t = a to t = b is:",
        "options": {
          "a": "∫[a,b] sqrt((dx/dt)^2 - (dy/dt)^2) dt",
          "b": "∫[a,b] sqrt(dx/dt + dy/dt) dt",
          "c": "∫[a,b] sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "d": "∫[a,b] (dx/dt + dy/dt) dt"
        },
        "answer": "c"
      },
      {
        "question": "Find the arc length of the curve x = cos(t), y = sin(t) for 0 ≤ t ≤ 2π.",
        "options": {
          "a": "π",
          "b": "2π",
          "c": "1",
          "d": "2"
        },
        "answer": "b"
      },
      {
        "question": "Find the arc length of the curve x = t^2, y = (2/3)t^3 for 0 ≤ t ≤ sqrt(3).",
        "options": {
          "a": "7/3",
          "b": "14/3",
          "c": "2",
          "d": "sqrt(3)"
        },
        "answer": "b"
      },
      {
        "question": "Find the length of the curve x = 8cos(t) + 8t sin(t), y = 8sin(t) - 8t cos(t) for 0 ≤ t ≤ π/2.",
        "options": {
          "a": "π^2",
          "b": "2π^2",
          "c": "4π",
          "d": "8π"
        },
        "answer": "b"
      },
      {
        "question": "The length of the astroid x = cos^3(t), y = sin^3(t), 0 ≤ t ≤ 2π is:",
        "options": {
          "a": "4",
          "b": "6",
          "c": "8",
          "d": "3π/2"
        },
        "answer": "b"
      },
      {
        "question": "The area under a parametric curve x = f(t), y = g(t) from t=a to t=b (assuming x increases with t and y>=0) is given by:",
        "options": {
          "a": "∫[a,b] x(t) * (dy/dt) dt",
          "b": "∫[a,b] y(t) * (dx/dt) dt",
          "c": "∫[a,b] sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "d": "∫[a,b] y(t) dt"
        },
        "answer": "b"
      },
      {
        "question": "Find the area enclosed by the ellipse x = a cos(t), y = b sin(t), 0 ≤ t ≤ 2π.",
        "options": {
          "a": "2πab",
          "b": "πab",
          "c": "π(a+b)",
          "d": "4ab"
        },
        "answer": "b"
      },
      {
        "question": "Find the area under one arch of the cycloid x = a(t - sin t), y = a(1 - cos t). (Hint: t goes from 0 to 2π)",
        "options": {
          "a": "πa^2",
          "b": "2πa^2",
          "c": "3πa^2",
          "d": "4πa^2"
        },
        "answer": "c"
      },
      {
        "question": "The formula for the area of the surface generated by revolving the curve x = f(t), y = g(t) (y≥0) about the x-axis from t=a to t=b is:",
        "options": {
          "a": "∫[a,b] 2πx(t) sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "b": "∫[a,b] 2πy(t) sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "c": "∫[a,b] πy(t)^2 sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "d": "∫[a,b] 2πy(t) (dx/dt) dt"
        },
        "answer": "b"
      },
      {
        "question": "The formula for the area of the surface generated by revolving the curve x = f(t), y = g(t) (x≥0) about the y-axis from t=a to t=b is:",
        "options": {
          "a": "∫[a,b] 2πx(t) sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "b": "∫[a,b] 2πy(t) sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "c": "∫[a,b] πx(t)^2 sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "d": "∫[a,b] 2πx(t) (dy/dt) dt"
        },
        "answer": "a"
      },
      {
        "question": "Find the surface area generated by revolving x = cos(t), y = 2 + sin(t), 0 ≤ t ≤ 2π about the x-axis.",
        "options": {
          "a": "4π^2",
          "b": "8π^2",
          "c": "4π",
          "d": "8π"
        },
        "answer": "b"
      },
      {
        "question": "Find the surface area generated by revolving x = t^3, y = t^2, 0 ≤ t ≤ 1 about the y-axis.",
        "options": {
          "a": "(π/27)(13^(3/2) - 8)",
          "b": "(2π/27)(13^(3/2) - 8)",
          "c": "(π/9)(13^(3/2) - 1)",
          "d": "(2π/9)(13^(3/2) - 1)"
        },
        "answer": "b"
      },
       {
        "question": "The arc length differential ds for a parametric curve is:",
        "options": {
          "a": "sqrt(dx^2 + dy^2)",
          "b": "sqrt((dx/dt)^2 + (dy/dt)^2) dt",
          "c": "(dx/dt + dy/dt) dt",
          "d": "|dx| + |dy|"
        },
        "answer": "b"
      },
      {
        "question": "To use the arc length formula, the curve must be traversed exactly ____ as t increases from a to b.",
        "options": {
          "a": "Twice",
          "b": "Once",
          "c": "Backwards",
          "d": "Zero times"
        },
        "answer": "b"
      },
      {
        "question": "Find the length of the curve x = e^t + e^-t, y = 5 - 2t for 0 ≤ t ≤ 3.",
        "options": {
          "a": "e^3 - e^-3",
          "b": "e^3 + e^-3",
          "c": "e^3 - e^-3 + 6",
          "d": "e^3 + e^-3 - 2"
        },
        "answer": "a"
      },
       {
        "question": "Find the area of the surface generated by revolving x = t, y = 2sqrt(t), 0 <= t <= 2 about the x-axis.",
        "options": {
          "a": "(8π/3)(3^(3/2) - 1)",
          "b": "(16π/3)(3^(3/2) - 1)",
          "c": "(8π/3)(2^(3/2) - 1)",
          "d": "(16π/3)(2^(3/2) - 1)"
        },
        "answer": "b"
      },
      {
        "question": "The condition for a parametric curve to be 'smooth' for arc length calculation is that:",
        "options": {
          "a": "dx/dt and dy/dt are continuous and not simultaneously zero",
          "b": "The curve does not intersect itself",
          "c": "The curve is a straight line",
          "d": "dx/dt and dy/dt are both zero"
        },
        "answer": "a"
      },
      {
        "question": "Find the length of x = a(cos(t) + t sin(t)), y = a(sin(t) - t cos(t)) from t=0 to t=π.",
        "options": {
          "a": "aπ^2/2",
          "b": "aπ^2",
          "c": "2aπ",
          "d": "aπ"
        },
        "answer": "a"
      }
    ]
  },
  "module5_calc": {
    "title": "Module 5: Polar Coordinates - Basics & Calculus",
    "questions": [
      {
        "question": "In polar coordinates (r, θ), 'r' represents the directed distance from the origin (pole) and 'θ' represents the:",
        "options": {
          "a": "Distance from x-axis",
          "b": "Distance from y-axis",
          "c": "Directed angle from the initial ray",
          "d": "Arc length"
        },
        "answer": "c"
      },
      {
        "question": "Which polar coordinate pair represents the same point as (2, π/6)?",
        "options": {
          "a": "(2, -π/6)",
          "b": "(-2, π/6)",
          "c": "(2, 13π/6)",
          "d": "(-2, -π/6)"
        },
        "answer": "c"
      },
      {
        "question": "Which polar coordinate pair represents the same point as (3, 0)?",
        "options": {
          "a": "(-3, 0)",
          "b": "(3, π)",
          "c": "(-3, π)",
          "d": "(3, 2π)"
        },
        "answer": "c"
      },
      {
        "question": "Find the Cartesian coordinates for the polar point (√2, π/4).",
        "options": {
          "a": "(1, 1)",
          "b": "(√2, √2)",
          "c": "(1, √2)",
          "d": "(√2, 1)"
        },
        "answer": "a"
      },
      {
        "question": "Find the Cartesian coordinates for the polar point (-3, 5π/6).",
        "options": {
          "a": "(-3√3/2, -3/2)",
          "b": "(3√3/2, -3/2)",
          "c": "(-3√3/2, 3/2)",
          "d": "(3√3/2, 3/2)"
        },
        "answer": "b"
      },
      {
        "question": "Find polar coordinates (r ≥ 0, 0 ≤ θ < 2π) for the Cartesian point (1, 1).",
        "options": {
          "a": "(√2, π/4)",
          "b": "(1, π/4)",
          "c": "(√2, 3π/4)",
          "d": "(2, π/4)"
        },
        "answer": "a"
      },
      {
        "question": "Find polar coordinates (r ≥ 0, 0 ≤ θ < 2π) for the Cartesian point (-√3, -1).",
        "options": {
          "a": "(2, 7π/6)",
          "b": "(2, 5π/6)",
          "c": "(√4, π/6)",
          "d": "(2, 4π/3)"
        },
        "answer": "a"
      },
      {
        "question": "The polar equation r = a represents a:",
        "options": {
          "a": "Line through the origin",
          "b": "Vertical line",
          "c": "Horizontal line",
          "d": "Circle centered at the origin"
        },
        "answer": "d"
      },
      {
        "question": "The polar equation θ = θ₀ represents a:",
        "options": {
          "a": "Line through the origin",
          "b": "Circle centered at the origin",
          "c": "Vertical line",
          "d": "Horizontal line"
        },
        "answer": "a"
      },
      {
        "question": "Convert the polar equation r cos(θ) = 2 to Cartesian coordinates.",
        "options": {
          "a": "y = 2",
          "b": "x = 2",
          "c": "x^2 + y^2 = 4",
          "d": "y = 2x"
        },
        "answer": "b"
      },
      {
        "question": "Convert the polar equation r = 4 csc(θ) to Cartesian coordinates.",
        "options": {
          "a": "x = 4",
          "b": "y = 4",
          "c": "x^2 + y^2 = 16",
          "d": "y = 4x"
        },
        "answer": "b"
      },
      {
        "question": "Convert the Cartesian equation x^2 + y^2 = 4 to polar coordinates.",
        "options": {
          "a": "r = 4",
          "b": "r = 2",
          "c": "r = 2cos(θ)",
          "d": "r = 2sin(θ)"
        },
        "answer": "b"
      },
      {
        "question": "Convert the Cartesian equation y = x to polar coordinates.",
        "options": {
          "a": "θ = π/4",
          "b": "r = 1",
          "c": "sin(θ) = cos(θ)",
          "d": "r = sin(θ) + cos(θ)"
        },
        "answer": "a"
      },
      {
        "question": "The graph of r = 1 - cos(θ) is symmetric with respect to the:",
        "options": {
          "a": "y-axis (θ = π/2)",
          "b": "x-axis (polar axis)",
          "c": "origin (pole)",
          "d": "line θ = π/4"
        },
        "answer": "b"
      },
      {
        "question": "The graph of r^2 = 4 sin(2θ) is symmetric with respect to the:",
        "options": {
          "a": "y-axis (θ = π/2)",
          "b": "x-axis (polar axis)",
          "c": "origin (pole)",
          "d": "line θ = π/4"
        },
        "answer": "c"
      },
      {
        "question": "The formula for the area of a region bounded by r = f(θ) from θ = α to θ = β is:",
        "options": {
          "a": "∫[α, β] r dθ",
          "b": "∫[α, β] (1/2)r^2 dθ",
          "c": "∫[α, β] πr^2 dθ",
          "d": "∫[α, β] sqrt(r^2 + (dr/dθ)^2) dθ"
        },
        "answer": "b"
      },
      {
        "question": "Find the area of the region enclosed by one loop of the rose r = cos(2θ).",
        "options": {
          "a": "π/8",
          "b": "π/4",
          "c": "π/2",
          "d": "π"
        },
        "answer": "a"
      },
      {
        "question": "Find the area inside the circle r = 3a cos(θ) and outside the cardioid r = a(1 + cos(θ)).",
        "options": {
          "a": "πa^2",
          "b": "2πa^2",
          "c": "3πa^2/2",
          "d": "a^2(π/2 + √3)"
        },
        "answer": "a"
      },
      {
        "question": "The formula for the arc length of a curve r = f(θ) from θ = α to θ = β is:",
        "options": {
          "a": "∫[α, β] sqrt(r^2 + (dr/dθ)^2) dθ",
          "b": "∫[α, β] (1/2)r^2 dθ",
          "c": "∫[α, β] sqrt(1 + (dr/dθ)^2) dθ",
          "d": "∫[α, β] r dθ"
        },
        "answer": "a"
      },
      {
        "question": "Find the length of the cardioid r = 1 + cos(θ).",
        "options": {
          "a": "4",
          "b": "6",
          "c": "8",
          "d": "2π"
        },
        "answer": "c"
      }
    ]
  },
  "module6_calc": {
    "title": "Module 6: Conic Sections",
    "questions": [
      {
        "question": "A set of points in a plane equidistant from a fixed point (focus) and a fixed line (directrix) is a:",
        "options": {
          "a": "Circle",
          "b": "Ellipse",
          "c": "Parabola",
          "d": "Hyperbola"
        },
        "answer": "c"
      },
      {
        "question": "The standard equation of a parabola with vertex at origin and focus at (0, p) is:",
        "options": {
          "a": "y^2 = 4px",
          "b": "x^2 = 4py",
          "c": "y^2 = -4px",
          "d": "x^2 = -4py"
        },
        "answer": "b"
      },
      {
        "question": "Find the focus and directrix of the parabola y^2 = 12x.",
        "options": {
          "a": "Focus (3, 0), Directrix x = -3",
          "b": "Focus (0, 3), Directrix y = -3",
          "c": "Focus (-3, 0), Directrix x = 3",
          "d": "Focus (0, -3), Directrix y = 3"
        },
        "answer": "a"
      },
      {
        "question": "A set of points in a plane whose distances from two fixed points (foci) have a constant sum is an:",
        "options": {
          "a": "Circle",
          "b": "Ellipse",
          "c": "Parabola",
          "d": "Hyperbola"
        },
        "answer": "b"
      },
      {
        "question": "The standard equation of an ellipse centered at the origin with foci on the x-axis is:",
        "options": {
          "a": "x^2/a^2 + y^2/b^2 = 1 (a>b)",
          "b": "x^2/b^2 + y^2/a^2 = 1 (a>b)",
          "c": "x^2/a^2 - y^2/b^2 = 1",
          "d": "y^2/a^2 - x^2/b^2 = 1"
        },
        "answer": "a"
      },
      {
        "question": "For the ellipse x^2/16 + y^2/9 = 1, find the foci.",
        "options": {
          "a": "(±5, 0)",
          "b": "(0, ±5)",
          "c": "(±√7, 0)",
          "d": "(0, ±√7)"
        },
        "answer": "c"
      },
      {
        "question": "A set of points in a plane whose distances from two fixed points (foci) have a constant difference is a:",
        "options": {
          "a": "Circle",
          "b": "Ellipse",
          "c": "Parabola",
          "d": "Hyperbola"
        },
        "answer": "d"
      },
      {
        "question": "The standard equation of a hyperbola centered at the origin with foci on the x-axis is:",
        "options": {
          "a": "x^2/a^2 + y^2/b^2 = 1",
          "b": "x^2/a^2 - y^2/b^2 = 1",
          "c": "y^2/a^2 - x^2/b^2 = 1",
          "d": "x^2/b^2 - y^2/a^2 = 1"
        },
        "answer": "b"
      },
      {
        "question": "Find the asymptotes of the hyperbola x^2/4 - y^2/9 = 1.",
        "options": {
          "a": "y = ±(2/3)x",
          "b": "y = ±(3/2)x",
          "c": "y = ±(4/9)x",
          "d": "y = ±(9/4)x"
        },
        "answer": "b"
      },
      {
        "question": "The eccentricity 'e' of a parabola is always:",
        "options": {
          "a": "e = 0",
          "b": "0 < e < 1",
          "c": "e = 1",
          "d": "e > 1"
        },
        "answer": "c"
      },
      {
        "question": "The eccentricity 'e' of an ellipse is always:",
        "options": {
          "a": "e = 0",
          "b": "0 ≤ e < 1",
          "c": "e = 1",
          "d": "e > 1"
        },
        "answer": "b"
      },
      {
        "question": "The eccentricity 'e' of a hyperbola is always:",
        "options": {
          "a": "e = 0",
          "b": "0 < e < 1",
          "c": "e = 1",
          "d": "e > 1"
        },
        "answer": "d"
      },
      {
        "question": "Identify the conic section given by the equation x^2 - 4y^2 + 2x + 8y - 7 = 0.",
        "options": {
          "a": "Parabola",
          "b": "Ellipse",
          "c": "Hyperbola",
          "d": "Circle"
        },
        "answer": "c"
      },
      {
        "question": "The equation (x-h)^2 + (y-k)^2 = r^2 represents a circle centered at:",
        "options": {
          "a": "(0, 0)",
          "b": "(h, k)",
          "c": "(-h, -k)",
          "d": "(r, r)"
        },
        "answer": "b"
      },
      {
        "question": "The polar equation r = ke / (1 + e cos θ) represents a conic with a focus at the origin and directrix:",
        "options": {
          "a": "y = k",
          "b": "y = -k",
          "c": "x = k",
          "d": "x = -k"
        },
        "answer": "c"
      },
      {
        "question": "Identify the conic section given by the polar equation r = 6 / (2 + cos θ).",
        "options": {
          "a": "Parabola (e=1)",
          "b": "Ellipse (e=1/2)",
          "c": "Hyperbola (e=2)",
          "d": "Circle (e=0)"
        },
        "answer": "b"
      },
      {
        "question": "Identify the conic section given by the polar equation r = 2 / (1 - sin θ).",
        "options": {
          "a": "Parabola",
          "b": "Ellipse",
          "c": "Hyperbola",
          "d": "Circle"
        },
        "answer": "a"
      },
      {
        "question": "Find the eccentricity of the conic r = 12 / (3 + sin θ).",
        "options": {
          "a": "3",
          "b": "1/3",
          "c": "4",
          "d": "12"
        },
        "answer": "b"
      },
      {
        "question": "Find the equation of the directrix for the conic r = 8 / (2 - 2 sin θ).",
        "options": {
          "a": "y = 4",
          "b": "y = -4",
          "c": "x = 4",
          "d": "x = -4"
        },
        "answer": "b"
      },
      {
        "question": "The relationship PF = e * PD relates the distance from a point P on the conic to the focus F and the distance from P to the directrix D using the:",
        "options": {
          "a": "Semimajor axis",
          "b": "Semiminor axis",
          "c": "Eccentricity",
          "d": "Focal length"
        },
        "answer": "c"
      }
    ]
  }
}
};
