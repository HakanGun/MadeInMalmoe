USE [MadeInMalmo]
GO

delete from EmployeeProjectPlan
GO
delete from  ProjectEstimate
GO
delete from EmployeeProject
GO
delete from Project
GO
delete from Employee
GO


SET IDENTITY_INSERT [dbo].[Employee] ON 

GO
INSERT [dbo].[Employee] ([EmployeeId], [FirstName], [LastName]) VALUES (1, N'Jennie', N'Berg')
GO
INSERT [dbo].[Employee] ([EmployeeId], [FirstName], [LastName]) VALUES (2, N'Marika', N'Rosenhall')
GO
INSERT [dbo].[Employee] ([EmployeeId], [FirstName], [LastName]) VALUES (3, N'Eva', N'Svensson')
GO
INSERT [dbo].[Employee] ([EmployeeId], [FirstName], [LastName]) VALUES (4, N'Donald', N'Jonsson')
GO
INSERT [dbo].[Employee] ([EmployeeId], [FirstName], [LastName]) VALUES (5, N'Håkan', N'Gunnarsson')
GO
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
SET IDENTITY_INSERT [dbo].[Project] ON 

GO
INSERT [dbo].[Project] ([ProjectId], [ProjectName], [StartDate], [OriginalDeadline], [OriginalHours], [PricePerHour], [OriginalPrice], [UseProjectHourPrice]) VALUES (1, N'MadeInMalmö', CAST(0x233A0B00 AS Date), CAST(0x883A0B00 AS Date), 480, CAST(85.00 AS Decimal(18, 2)), CAST(41000.00 AS Decimal(18, 2)), 0)
GO
SET IDENTITY_INSERT [dbo].[Project] OFF
GO
SET IDENTITY_INSERT [dbo].[EmployeeProject] ON 

GO
INSERT [dbo].[EmployeeProject] ([EmployeeProjectId], [EmployeeId], [ProjectId], [PricePerHour], [CapacityUtilizationRate]) VALUES (1, 1, 1, CAST(80.00 AS Decimal(7, 2)), 100)
GO
INSERT [dbo].[EmployeeProject] ([EmployeeProjectId], [EmployeeId], [ProjectId], [PricePerHour], [CapacityUtilizationRate]) VALUES (2, 2, 1, CAST(90.00 AS Decimal(7, 2)), 80)
GO
INSERT [dbo].[EmployeeProject] ([EmployeeProjectId], [EmployeeId], [ProjectId], [PricePerHour], [CapacityUtilizationRate]) VALUES (3, 3, 1, CAST(90.00 AS Decimal(7, 2)), 100)
GO
INSERT [dbo].[EmployeeProject] ([EmployeeProjectId], [EmployeeId], [ProjectId], [PricePerHour], [CapacityUtilizationRate]) VALUES (4, 4, 1, CAST(90.00 AS Decimal(7, 2)), 100)
GO
INSERT [dbo].[EmployeeProject] ([EmployeeProjectId], [EmployeeId], [ProjectId], [PricePerHour], [CapacityUtilizationRate]) VALUES (5, 5, 1, CAST(90.00 AS Decimal(7, 2)), 100)
GO
SET IDENTITY_INSERT [dbo].[EmployeeProject] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectEstimate] ON 

GO
INSERT [dbo].[ProjectEstimate] ([ProjectEstimateId], [ProjectId], [Date], [EstimateHours]) VALUES (1, 1, CAST(0x613A0B00 AS Date), CAST(200.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[ProjectEstimate] OFF
GO
SET IDENTITY_INSERT [dbo].[EmployeeProjectPlan] ON 

GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (1, 1, CAST(0x233A0B00 AS Date), CAST(0x333A0B00 AS Date), CAST(1.50 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (2, 1, CAST(0x4B3A0B00 AS Date), CAST(0x883A0B00 AS Date), CAST(2.00 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (3, 2, CAST(0x233A0B00 AS Date), CAST(0x2C3A0B00 AS Date), CAST(1.50 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (4, 2, CAST(0x4B3A0B00 AS Date), CAST(0x883A0B00 AS Date), CAST(2.00 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (5, 3, CAST(0x233A0B00 AS Date), CAST(0x333A0B00 AS Date), CAST(1.50 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (7, 3, CAST(0x4B3A0B00 AS Date), CAST(0x883A0B00 AS Date), CAST(2.00 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (8, 4, CAST(0x233A0B00 AS Date), CAST(0x2C3A0B00 AS Date), CAST(1.50 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (9, 4, CAST(0x443A0B00 AS Date), CAST(0x883A0B00 AS Date), CAST(1.00 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (10, 5, CAST(0x233A0B00 AS Date), CAST(0x2C3A0B00 AS Date), CAST(1.50 AS Decimal(4, 2)))
GO
INSERT [dbo].[EmployeeProjectPlan] ([EmployeeProjectPlanId], [EmployeeProjectId], [StartDate], [EndDate], [AverageDailyHours]) VALUES (11, 5, CAST(0x443A0B00 AS Date), CAST(0x883A0B00 AS Date), CAST(1.00 AS Decimal(4, 2)))
GO
SET IDENTITY_INSERT [dbo].[EmployeeProjectPlan] OFF
GO


SET IDENTITY_INSERT [dbo].[EmployeeProjectWorkingHours] ON 

GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (1, 1, 1, CAST(0x613A0B00 AS Date), CAST(1.00 AS Decimal(7, 2)), CAST(1.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (2, 1, 1, CAST(0x623A0B00 AS Date), CAST(1.00 AS Decimal(7, 2)), CAST(1.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (3, 1, 1, CAST(0x633A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (4, 2, 1, CAST(0x613A0B00 AS Date), CAST(1.00 AS Decimal(7, 2)), CAST(1.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (5, 2, 1, CAST(0x623A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (6, 2, 1, CAST(0x643A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (7, 3, 1, CAST(0x623A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (8, 3, 1, CAST(0x643A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (9, 4, 1, CAST(0x613A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (10, 4, 1, CAST(0x623A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (11, 4, 1, CAST(0x633A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (12, 5, 1, CAST(0x633A0B00 AS Date), CAST(6.00 AS Decimal(7, 2)), CAST(6.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (13, 1, 1, CAST(0x673A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (14, 1, 1, CAST(0x683A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (15, 2, 1, CAST(0x693A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (16, 2, 1, CAST(0x6A3A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (17, 3, 1, CAST(0x683A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (18, 3, 1, CAST(0x6A3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (19, 4, 1, CAST(0x673A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (20, 4, 1, CAST(0x6A3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (21, 5, 1, CAST(0x693A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (22, 5, 1, CAST(0x6B3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (23, 1, 1, CAST(0x6E3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (24, 1, 1, CAST(0x6F3A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (25, 2, 1, CAST(0x6F3A0B00 AS Date), CAST(7.00 AS Decimal(7, 2)), CAST(7.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (26, 3, 1, CAST(0x703A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (27, 3, 1, CAST(0x713A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (28, 4, 1, CAST(0x6E3A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (29, 4, 1, CAST(0x723A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (30, 5, 1, CAST(0x703A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (31, 5, 1, CAST(0x723A0B00 AS Date), CAST(5.00 AS Decimal(7, 2)), CAST(5.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (32, 1, 1, CAST(0x753A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (33, 1, 1, CAST(0x773A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (34, 1, 1, CAST(0x793A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (35, 2, 1, CAST(0x753A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (36, 2, 1, CAST(0x773A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (37, 2, 1, CAST(0x793A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (38, 3, 1, CAST(0x753A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (39, 3, 1, CAST(0x773A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (40, 3, 1, CAST(0x793A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (41, 4, 1, CAST(0x763A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (42, 4, 1, CAST(0x783A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (43, 5, 1, CAST(0x763A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (44, 5, 1, CAST(0x783A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (45, 1, 1, CAST(0x7C3A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (46, 1, 1, CAST(0x7E3A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (47, 1, 1, CAST(0x803A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(80.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (48, 2, 1, CAST(0x7C3A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (49, 2, 1, CAST(0x7E3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (50, 2, 1, CAST(0x803A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (51, 3, 1, CAST(0x7C3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (52, 3, 1, CAST(0x7E3A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (53, 3, 1, CAST(0x803A0B00 AS Date), CAST(2.00 AS Decimal(7, 2)), CAST(2.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (54, 4, 1, CAST(0x7D3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (55, 4, 1, CAST(0x7F3A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (56, 5, 1, CAST(0x7D3A0B00 AS Date), CAST(4.00 AS Decimal(7, 2)), CAST(4.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (57, 5, 1, CAST(0x7F3A0B00 AS Date), CAST(3.00 AS Decimal(7, 2)), CAST(3.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
SET IDENTITY_INSERT [dbo].[EmployeeProjectWorkingHours] OFF
GO


-- Klumpsumma bara för att simulera allt som är fakturerat före 1/9
SET IDENTITY_INSERT [dbo].[EmployeeProjectWorkingHours] ON 
GO
INSERT [dbo].[EmployeeProjectWorkingHours] ([EmployeeProjectWorkingHoursId], [EmployeeId], [ProjectId], [Date], [WorkedHours], [InvoicedHours], [InvoicedPricePerHour]) VALUES (58, 1, 1, '2015-08-29', CAST(258.00 AS Decimal(7, 2)), CAST(258.00 AS Decimal(7, 2)), CAST(90.00 AS Decimal(7, 2)))
GO
SET IDENTITY_INSERT [dbo].[EmployeeProjectWorkingHours] OFF
GO