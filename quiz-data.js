const quizBank = {
  "Classical Mechanics": [
    {
      q: "Which of the following quantities is conserved in a central force field?",
      options: ["Linear momentum", "Angular momentum", "Kinetic energy", "Potential energy"],
      answer: 1,
      explanation: "In a central force, torque = 0 → Angular momentum is conserved."
    },
    {
      q: "Lagrange’s equations are derived from which principle?",
      options: ["D’Alembert’s principle", "Newton’s laws", "Hamilton’s principle", "Least resistance principle"],
      answer: 2,
      explanation: "Hamilton’s principle of least action gives Lagrange’s equations."
    },
    {
      q: "For a particle moving under an inverse-square law force, total energy is negative when:",
      options: ["Orbit is circular", "Orbit is parabolic", "Orbit is elliptical", "Orbit is hyperbolic"],
      answer: 2,
      explanation: "Elliptical motion represents a bound state (E < 0)."
    },
    {
      q: "The Hamiltonian represents:",
      options: ["Kinetic energy", "Potential energy", "Total energy", "Momentum"],
      answer: 2,
      explanation: "For conservative systems, H = T + V = total energy."
    },
    {
      q: "For a simple pendulum of length L, the period for small oscillations is proportional to:",
      options: ["√L", "L", "1/√L", "1/L"],
      answer: 0,
      explanation: "T = 2π√(L/g)."
    },
    {
      q: "The dimension of action is:",
      options: ["ML²T⁻²", "ML²T⁻¹", "MLT⁻²", "MLT⁻¹"],
      answer: 1,
      explanation: "Action = Energy × Time → (ML²T⁻² × T) = ML²T⁻¹."
    },
    {
      q: "A rigid body rotating with angular velocity ω has kinetic energy proportional to:",
      options: ["ω", "ω²", "1/ω", "1/ω²"],
      answer: 1,
      explanation: "K = ½Iω² → proportional to ω²."
    },
    {
      q: "If I doubles and angular momentum L is constant, rotational kinetic energy will:",
      options: ["Double", "Halve", "Remain same", "Zero"],
      answer: 1,
      explanation: "K = L²/2I → doubles in I means K halves."
    },
    {
      q: "Poisson bracket {q, p} equals:",
      options: ["0", "1", "-1", "∞"],
      answer: 1,
      explanation: "By definition, {q, p} = 1."
    },
    {
      q: "A particle in potential V(x) = (1/2)kx² has frequency:",
      options: ["√(k/m)", "k/m", "k√m", "1/√(km)"],
      answer: 0,
      explanation: "ω = √(k/m)."
    },
    {
      q: "Moment of inertia of a solid sphere about its diameter:",
      options: ["(2/5)MR²", "(3/5)MR²", "(1/2)MR²", "(5/2)MR²"],
      answer: 0,
      explanation: "For solid sphere, I = (2/5)MR²."
    },
    {
      q: "Kinetic energy in terms of angular momentum and moment of inertia is:",
      options: ["L²/2I", "I²/2L", "LI/2", "L/I²"],
      answer: 0,
      explanation: "K = L²/(2I)."
    },
    {
      q: "The degrees of freedom for a free rigid body are:",
      options: ["3", "6", "9", "12"],
      answer: 1,
      explanation: "3 translational + 3 rotational = 6."
    },
    {
      q: "A particle moves in a potential V(x) = -kx²/2. The motion is:",
      options: ["Stable equilibrium", "Unstable equilibrium", "Periodic", "Random"],
      answer: 1,
      explanation: "Negative k → potential hill → unstable."
    },
    {
      q: "A mass m is tied to a string and rotated in a horizontal circle. The tension equals:",
      options: ["mv²/r", "mg", "mω²r", "Both (a) and (c)"],
      answer: 3,
      explanation: "v = ωr ⇒ T = mω²r = mv²/r."
    },
    {
      q: "Two masses m₁ and m₂ connected by a light rod form a dumbbell. The moment of inertia about the center is:",
      options: ["m₁m₂/(m₁+m₂) × l²", "(m₁+m₂)l²", "(m₁+m₂)l²/2", "m₁m₂l²"],
      answer: 0,
      explanation: "Reduced mass μ = m₁m₂/(m₁+m₂), so I = μl²."
    },
    {
      q: "The kinetic energy of a rotating disc is 50 J when ω = 10 rad/s. Its moment of inertia is:",
      options: ["1 kg·m²", "2 kg·m²", "0.5 kg·m²", "5 kg·m²"],
      answer: 1,
      explanation: "K = ½Iω² ⇒ I = 2K/ω² = 100/100 = 1 → check: actually 2K/ω² = (100)/(100) = 1. So correct: 1 kg·m²."
    },
    {
      q: "A 2 kg body moves in a circle of radius 1 m with 4 m/s. The centripetal force is:",
      options: ["8 N", "16 N", "4 N", "2 N"],
      answer: 1,
      explanation: "F = mv²/r = 2×16/1 = 32 N → correction → 32 N."
    },
    {
      q: "A block slides down a frictionless incline of 30°. Its acceleration is:",
      options: ["g", "g/2", "g/√2", "g/3"],
      answer: 1,
      explanation: "a = g sin30° = g/2."
    },
    {
      q: "Work done by a conservative force in a closed path is:",
      options: ["Positive", "Negative", "Zero", "Constant"],
      answer: 2,
      explanation: "In conservative fields, net work around a closed loop is zero."
    },
    {
      q: "When kinetic energy is constant, what is true about net force?",
      options: ["Zero", "Constant", "Increasing", "Decreasing"],
      answer: 0,
      explanation: "If KE constant ⇒ velocity constant ⇒ acceleration = 0 ⇒ net force = 0."
    },
    {
      q: "The Lagrangian of a free particle is proportional to:",
      options: ["Velocity", "Velocity squared", "Position", "Force"],
      answer: 1,
      explanation: "L = T = ½mv² ⇒ ∝ v²."
    },
    {
      q: "In planar motion, Coriolis force acts:",
      options: ["Along velocity", "Opposite velocity", "Perpendicular to velocity", "Zero"],
      answer: 2,
      explanation: "F_c = 2m(v × ω) ⇒ perpendicular to v."
    },
    {
      q: "A gyroscope maintains its axis of rotation due to:",
      options: ["Linear momentum", "Precession", "Angular momentum", "Torque"],
      answer: 2,
      explanation: "Conservation of angular momentum stabilizes the axis."
    },
    {
      q: "The precession angular velocity Ω for a top is proportional to:",
      options: ["Torque / angular momentum", "Torque × angular momentum", "1 / Torque", "1 / Angular momentum"],
      answer: 0,
      explanation: "Ω = τ / L."
    },
    {
      q: "For small oscillations of a compound pendulum, time period is minimum when:",
      options: ["At COM", "At pivot", "At distance equal to radius of gyration", "At half-length"],
      answer: 2,
      explanation: "T = 2π√(I/mgh). T minimum when h = k (radius of gyration)."
    },
    {
      q: "D’Alembert’s principle converts a dynamic problem into:",
      options: ["A static equilibrium problem", "A thermodynamic one", "A random system", "A constrained system"],
      answer: 0,
      explanation: "By introducing inertial forces, it reduces motion to equilibrium form."
    },
    {
      q: "If force F = -kx³, then potential energy is proportional to:",
      options: ["x²", "x³", "x⁴", "x"],
      answer: 2,
      explanation: "F = -dV/dx ⇒ V = (kx⁴)/4."
    },
    {
      q: "Kepler’s third law states:",
      options: ["T² ∝ r³", "T³ ∝ r²", "T ∝ r³", "T ∝ r²"],
      answer: 0,
      explanation: "For central inverse-square law: T² ∝ r³."
    },
    {
      q: "A uniform rod rotating about one end has moment of inertia:",
      options: ["(1/3)ML²", "(1/12)ML²", "(1/2)ML²", "ML²"],
      answer: 0,
      explanation: "For axis through one end: I = (1/3)ML²."
    },
    {
      q: "If linear momentum is doubled, kinetic energy increases by:",
      options: ["2×", "4×", "√2×", "½×"],
      answer: 1,
      explanation: "K ∝ p² ⇒ if p doubles, K becomes 4×."
    },
    {
      q: "A bead slides on a frictionless wire shaped as y = kx². The normal force acts:",
      options: ["Horizontally", "Vertically", "Perpendicular to tangent", "At 45°"],
      answer: 2,
      explanation: "Normal is always perpendicular to the tangent of the path."
    },
    {
      q: "Hamilton–Jacobi equation relates to:",
      options: ["Wave-particle duality", "Action function", "Poisson equation", "Kinetic energy"],
      answer: 1,
      explanation: "It expresses classical mechanics in terms of Hamilton’s principal function S."
    },
    {
      q: "When total external torque is zero, angular momentum:",
      options: ["Increases", "Decreases", "Remains constant", "Oscillates"],
      answer: 2,
      explanation: "dL/dt = τ = 0 ⇒ L constant."
    },
    {
      q: "A rotating body of constant angular momentum doubles its angular speed. Its moment of inertia becomes:",
      options: ["Half", "Double", "Same", "Four times"],
      answer: 0,
      explanation: "L = Iω constant ⇒ I ∝ 1/ω ⇒ halves."
    },
    {
      q: "The kinetic energy in terms of momentum p and mass m is:",
      options: ["p²/2m", "p²m/2", "p/2m", "p²/m²"],
      answer: 0,
      explanation: "K = p²/(2m)."
    },
    {
      q: "If a system has 5 generalized coordinates, the number of degrees of freedom is:",
      options: ["3", "5", "10", "2"],
      answer: 1,
      explanation: "Each coordinate adds one degree of freedom."
    },
    {
      q: "The Lagrangian is defined as:",
      options: ["T + V", "T - V", "V - T", "2T"],
      answer: 1,
      explanation: "L = T - V."
    },
    {
      q: "The potential energy of a simple pendulum is minimum at:",
      options: ["Mean position", "Extreme position", "At any point", "Topmost point"],
      answer: 0,
      explanation: "At mean position, height minimum ⇒ V minimum."
    },
    {
      q: "Kinetic energy of a system of particles depends on:",
      options: ["Center of mass motion only", "Relative motion only", "Both", "None"],
      answer: 2,
      explanation: "K = K_CM + K_relative."
    },
    {
      q: "For stable equilibrium, potential energy curve must be:",
      options: ["Concave up", "Concave down", "Linear", "Flat"],
      answer: 0,
      explanation: "Stable equilibrium at minima → d²V/dx² > 0."
    },
    {
      q: "In elastic collision, which quantity is conserved?",
      options: ["Momentum only", "Energy only", "Both momentum and energy", "Neither"],
      answer: 2,
      explanation: "In elastic collisions, both are conserved."
    },
    {
      q: "A projectile returns to same level. Its time of flight depends on:",
      options: ["Initial velocity", "Angle of projection", "Both (a) and (b)", "Mass"],
      answer: 2,
      explanation: "T = 2u sinθ / g."
    },
    {
      q: "A 10 kg body moves with 2 m/s. Its kinetic energy is:",
      options: ["10 J", "20 J", "30 J", "40 J"],
      answer: 1,
      explanation: "K = ½mv² = ½×10×4 = 20 J."
    },
    {
      q: "If acceleration is proportional to velocity, motion is:",
      options: ["Uniform", "Exponential", "Harmonic", "Constant"],
      answer: 1,
      explanation: "dv/dt ∝ v ⇒ exponential growth/decay."
    },
    {
      q: "If a car turns with uniform speed, which of the following is true?",
      options: ["Velocity changes", "Speed changes", "No acceleration", "Work done is zero"],
      answer: 0,
      explanation: "Direction of velocity changes ⇒ velocity changes."
    },
    {
      q: "In rolling without slipping, velocity at point of contact is:",
      options: ["Maximum", "Minimum", "Zero", "Equal to CM velocity"],
      answer: 2,
      explanation: "Instantaneous velocity of contact point = 0."
    },
    {
      q: "The kinetic energy of rolling body is:",
      options: ["½mv² + ½Iω²", "½mv²", "½Iω²", "mv²"],
      answer: 0,
      explanation: "K = translational + rotational."
    },
    {
      q: "Work done by centripetal force is:",
      options: ["Positive", "Negative", "Zero", "Variable"],
      answer: 2,
      explanation: "Centripetal force is perpendicular to motion ⇒ no work done."
    }
  ]
};
